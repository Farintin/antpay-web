import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import axios from "axios"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from '@mui/material/Stack'

import { Root } from "./component"

import { NavBar, UsersStatus, ChatsList, ChatRoom } from "../../sections"

import { setUserData } from '../../store/reducer/user'
import { setContacts } from '../../store/reducer/contacts'
import { 
  setIsConnected, 
  
  setOldRoomMessages,
  
  initRecentRoomMessages,
  setRecentRoomMessages,

  setChatMessageRecieptOnReaderRecieved,
  setNewMessage } from '../../store/reducer/socketStates'

import { socket } from '../../socket'





export default function () {
  const [phonebook, setPhonebook] = useState(null)
  const accessToken = localStorage.getItem('accessToken')
  const { userData } = useSelector(state => state.user)
  const { contacts } = useSelector(state => state.contacts)
  const { openedAppAt, isConnected, newMessage, activeRoom } = useSelector(state => state.socketStates)
  
  const dispatch = useDispatch()



  useEffect(() => {
    // console.log('accessToken:', accessToken);
    console.log('openedAppAt:', openedAppAt);
    axios.get('http://localhost:5000/v1/users/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        const { data } = response
        if (data.msg === 'ok') {
          const userData = data.data
          dispatch(setUserData(userData))
        } else {
            console.log('userResponse:', response)
        }
      })
      .catch(error => {
        console.log('userErrorResponse:', error)
      })


      
    const onConnect = () => {
      dispatch(setIsConnected(true))
    }
    const onDisconnect = () => {
      dispatch(setIsConnected(false))
    }
    const onNewMessage = (msg) => {
      console.log('userData:', userData, '@"[onNewMessage] if (onNewMessage) "');
      /* if (userData.phone.number === msg.reader) {// update reciept
        socket.emit('chat-message-delivered', {
          roomType: activeRoom.roomType,
          usersPhoneNumber: [activeRoom.guest.phone.number, activeRoom.host.phone.number],
          messageId: msg.id
        })
      }
      dispatch(setRecentRoomMessages(msg)) */
      dispatch(setNewMessage(true))
    }
    const onOldChatMessages = (messages) => {
      dispatch(setOldRoomMessages(messages))
    }
    const onChatGuestRecievedMessage = (data) => {
      dispatch(setChatMessageRecieptOnReaderRecieved(data))
    }

    

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('recieve-message', onNewMessage)
    socket.on('recieve-former-chat-messages', onOldChatMessages)
    socket.on('reader-recieved-delivered-message', onChatGuestRecievedMessage)
    
    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('recieve-message', onNewMessage)
      socket.off('recieve-former-chat-messages', onOldChatMessages)
      socket.off('reader-recieved-delivered-message', onChatGuestRecievedMessage)
    }
  }, [])

  useEffect(() => {
    if (userData) {
      console.log('userData:', userData);
      axios.get('http://localhost:5000/v1/users/user/phonebook', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(response => {
          const { data } = response
          if (data.msg === 'ok') {
            const phonebookData = data.data
            setPhonebook(phonebookData)
          } else {
            console.log('phonebookResponse:', response)
          }
        })
        .catch(error => {
          console.log('phonebookErrorResponse:', error)
        })
    }
  }, [userData])

  useEffect(() => {
    if (phonebook) {
      console.log('phonebook:', phonebook);
      let { contacts } = phonebook
      const contactsWithExistingUser = contacts.filter(c => c.userAccExist)
      const contactsWithExistingUserIds = contactsWithExistingUser.map(c => c.userId)

      axios.get(`http://localhost:5000/v1/users/user/fetchUsers?ids=${contactsWithExistingUserIds.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(response => {
          const { data } = response
          if (data.msg === 'ok') {
            const usersData = data.data
            contacts = contacts.map(c => {
              if (c.userAccExist) {
                c.user = usersData.find(user => user._id === c.userId)
              }
              return c
            })

            dispatch(setContacts(contacts))
          } else {
            console.log('fetchUsersResponse:', response)
          }
        })
        .catch(error => {
          console.log('fetchUsersErrorResponse:', error)
        })
    }
  }, [phonebook])

  useEffect(() => {
    // console.log('contacts:', contacts);
    console.log('isConnected:', isConnected);
    
    if (isConnected === null) {
      // console.log('@"[isConnected] if (isConnected === null) "');
      socket.connect()
    }
    
    if (isConnected === false) {
      // console.log('@"[isConnected] if (isConnected === false) "');
      socket.connect()
    }
    
    if (isConnected === true) {
      // console.log('@"[contacts] if (contacts) "');
    }
    
    if (isConnected === true && contacts) {
      console.log('@"[isConnected] if (isConnected === true && contacts) "');
      contacts.forEach(contact => {
        const data = {
          roomType: 'pair',
          usersPhoneNumber: [contact.phone.number, userData.phone.number]
        }
        // dispatch(initOldRoomMessages(contact))
        dispatch(initRecentRoomMessages(contact))

        socket.emit('join-room', data)
      });
    }
  }, [contacts, isConnected])
  
  useEffect(() => {
    // console.log('newMessage:', newMessage);
    if (newMessage) {
      console.log('newMessage:', newMessage, '@"[newMessage] if (newMessage) "');
      dispatch(setNewMessage(false))
    }
  }, [newMessage])

  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>

          <Grid item xs={3.6} className='col col-1'>

            <Stack spacing={0} className='stack'>
              <Box className="row row-1">

                <NavBar/>
                <UsersStatus/> 
                
              </Box>
              <Box className="row row-2">

                <ChatsList/>

              </Box>
            </Stack>

          </Grid>

          <Grid item xs={8.4} className='col col-2'>

            <ChatRoom/>

          </Grid>

        </Grid>

      </Box>
    </Root>
  )
}