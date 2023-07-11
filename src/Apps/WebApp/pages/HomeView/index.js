// eslint-disable-next-line
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import axios from "axios"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from '@mui/material/Stack'

import { Root } from "./component"

import { NavBar, UsersStatus, ChatsList, ChatRoom, ContactProfile } from "../../sections"

import { setUserData } from '../../store/reducer/user'
import { setContacts } from '../../store/reducer/contacts'
import { 
  setIsConnected,
  setNewMessage,
  setRecieptPing1,
  setRecieptPing2,
  setRecieptPing3 } from '../../store/reducer/socketStates'
import {
  setRoomsGuestIndication,
  setRoomsMessages,

  setRoomsTextInputValue,
  setRoomMessages,

  setRoomsUnreadMessagesCount,
  incrementRoomUnreadMessagesCount,

  updateMessageReciept1,
  updateMessageReciept2,
  updateMessagesReciept3,

  setRoomGuestOnline,
  setRoomGuestTyping,
  setSendRoomGuestOnlineHandshake } from '../../store/reducer/roomsStates'

import { socket } from '../../socket'





export default function () {
  const accessToken = localStorage.getItem('accessToken')
  const { userData } = useSelector(state => state.user)
  const { contacts, showRoomGuestContactProfile } = useSelector(state => state.contacts)
  const { isConnected, newMessage, recieptPing1, recieptPing2, recieptPing3 } = useSelector(state => state.socketStates)
  const {
    roomsMessages,
    sendRoomGuestOnlineHandshake,
    activeRoom,
    typing } = useSelector(state => state.roomsStates)
  const [ roomsData, setRoomsData] = useState(null)
  const [ initRoomsUnreadMessages, setInitRoomsUnreadMessages ] = useState(false)
  const [ trackRoomsMessages, setTrackRoomsMessages ] = useState(false)
  const [ trackRoomMessages, setTrackRoomMessages ] = useState(false)
  const [ renderContactProfile, setRenderContactProfile ] = useState(showRoomGuestContactProfile)
  const dispatch = useDispatch()



  const formatMessages = (messages) => {
    let messagesCopy = []
    messages.sort((a,b) => new Date(a.time) - new Date(b.time))
    let prevMsg
    let timeObj
    let prevMsgTimeObj
    messages.forEach((msg, i) => {
      timeObj = new Date(msg.time)
      if (i === 0) {
        messagesCopy.push({ component: 'checkpoint', time: timeObj.toString() })
      } else {
        prevMsg = messages[i - 1]
        prevMsgTimeObj = new Date(prevMsg.time) 
        if (timeObj.getDate() !== prevMsgTimeObj.getDate()) {
          messagesCopy.push({ component: 'checkpoint-terminal', time: prevMsg.time })
          messagesCopy.push({ component: 'checkpoint', time: timeObj.toString() })
        }
      }

      const msgCopy = structuredClone(msg)
      msgCopy.component = 'chat-message'
      messagesCopy.push(msgCopy)
      if (i === messages.length - 1) {
        messagesCopy.push({ component: 'checkpoint-terminal', time: timeObj.toString() })
      }
    })

    return messagesCopy
  }



  useEffect(() => {
    console.log('accessToken:', accessToken);
    // console.log('openedAppAt:', openedAppAt);
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
    const onNewMessage = (message) => {
      dispatch(setNewMessage(message))
    }
    const onRecieptPing1 = (message) => {
      dispatch(setRecieptPing1(message))
    }
    const onRecieptPing2 = (data) => {
      dispatch(setRecieptPing2(data))
    }
    const onRecieptPing3 = (data) => {
      dispatch(setRecieptPing3(data))
    }
    const onRoomGuestOnline = (data) => {
      dispatch(setRoomGuestOnline(data))
    }
    const onRoomGuestTyping = (data) => {
      dispatch(setRoomGuestTyping(data))
    }
    const onRoomGuestOnlineHandshake = (data) => {
      dispatch(setRoomGuestOnline(data))
    }
    

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('recieve-message', onNewMessage)
    socket.on('to-client-reciept-ping1', onRecieptPing1)
    socket.on('to-client-reciept-ping2', onRecieptPing2)
    socket.on('to-client-reciept-ping3', onRecieptPing3)
    socket.on('room-guest-online', onRoomGuestOnline)
    socket.on('room-guest-typing', onRoomGuestTyping)
    socket.on('room-guest-online-handshake', onRoomGuestOnlineHandshake)
    
    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('recieve-message', onNewMessage)
      socket.off('to-client-reciept-ping1', onRecieptPing1)
      socket.off('to-client-reciept-ping2', onRecieptPing2)
      socket.off('to-client-reciept-ping3', onRecieptPing3)
      socket.off('room-guest-online', onRoomGuestOnline)
      socket.off('room-guest-typing', onRoomGuestTyping)
      socket.off('room-guest-online-handshake', onRoomGuestOnlineHandshake)
    }
  }, [])

  useEffect(() => {
    if (userData) {
      axios.get('http://localhost:5000/v1/users/user/phonebook', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(response => {
          const { data } = response
          if (data.msg === 'ok') {
            const phonebook = data.data
            dispatch(setContacts(phonebook.contacts))
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
    if (contacts && contacts.length > 0) {
      const contactsWithNoRoomId = contacts.filter(c => (!c.roomId))
      if (contactsWithNoRoomId.length > 0) {
        axios.post('http://localhost:5000/v1/users/user/rooms/assignContactsToRooms', {
            contacts: contactsWithNoRoomId
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
          .then(response => {
            const { data } = response
            if (data.msg === 'success') {
              let i
              const contactsCopy = structuredClone(contacts)
              data.data.forEach(c => {
                i = contactsCopy.findIndex(contact => (c.phone.number === contact.phone.number))
                if (i !== -1) {
                  contactsCopy[i].roomId = c.roomId
                }
              })
              dispatch(setContacts(contactsCopy))
            } else {
              console.log('assignContactToRoomsResponse:', response)
            }
          })
          .catch(error => {
            console.log('assignContactToRoomsErrorResponse:', error)
          })
      } else {
        const roomsId = contacts.map(contact => (contact.roomId))
        axios.get('http://localhost:5000/v1/rooms', { params: {
              ids: roomsId.toString()
            }, 
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
          .then(response => {
            const { data } = response
            if (data.msg === 'success') {
              setRoomsData(data.data.rooms)
            } else {
              console.log('roomsResponse:', response)
            }
          })
          .catch(error => {
            console.log('roomsErrorResponse:', error)
          })
      }
    }
  }, [contacts])

  useEffect(() => {
    if (isConnected === null) {
      // 
    }
    
    if (isConnected === false) {
      socket.connect()
    }
    
    if (isConnected === true) {
      const roomIds = Object.keys(roomsMessages.rooms)
      socket.emit('join-rooms', roomIds)
      setTrackRoomsMessages(true)
    }
  }, [isConnected])
  
  useEffect(() => {
    if (roomsData !== null) {
      const roomsGuestIndication = { lastModifiedRoom: null, rooms: {} }
      const roomsMessages = { lastModifiedRoom: null, rooms: {} }
      const roomsTextInputValue = {}
      roomsData.forEach(roomData => {
        const { messages, roomType } = roomData
        
        roomsGuestIndication.rooms[roomData._id] = {
          roomType,
          guestOnline: false,
          guestTyping: false
        }
        const oldMessages = formatMessages(messages)
        roomsMessages.rooms[roomData._id] = {
          roomType,
          oldMessages,
          recentMessages: []
        }
        roomsTextInputValue[roomData._id] = ''
      })
      dispatch(setRoomsGuestIndication(roomsGuestIndication))
      dispatch(setRoomsMessages(roomsMessages))
      dispatch(setRoomsTextInputValue(roomsTextInputValue))
    }
  }, [roomsData])

  useEffect(() => {
    if (newMessage) {
      const message = structuredClone(newMessage)

      dispatch(setRoomMessages(message))

      if (userData.phone.number === message.author) {
        if (message.reciept === 0) {
          socket.emit('send-message', message)
          // console.log('sent message');
        }
      }

      if (userData.phone.number === message.reader) {
        message.sid = ''
        dispatch(incrementRoomUnreadMessagesCount({ roomId: message.roomId }))
        const pingData = {
          roomId: message.roomId,
          _id: message._id
        }
        socket.emit('to-server-reciept-ping2', pingData)
      }
      
      dispatch(setNewMessage(null))
    }
  }, [newMessage])
  
  useEffect(() => {
    if (recieptPing1) {
      const data = recieptPing1
      dispatch(updateMessageReciept1(data))
      
      dispatch(setRecieptPing1(null))
    }
  }, [recieptPing1])
  
  useEffect(() => {
    if (recieptPing2) {
      const data = recieptPing2
      dispatch(updateMessageReciept2(data))
      setTrackRoomMessages(true)
      
      dispatch(setRecieptPing2(null))
    }
  }, [recieptPing2])
  
  useEffect(() => {
    if (recieptPing3) {
      const data = recieptPing3
      // console.log({ recieptPing3 });
      dispatch(updateMessagesReciept3({ ...data, userPhoneNumber: userData.phone.number }))
      
      dispatch(setRecieptPing3(null))
    }
  }, [recieptPing3])
  
  useEffect(() => {
    if (roomsMessages) {
      if (isConnected === null) {
        setInitRoomsUnreadMessages(true)
      }
    }
  }, [roomsMessages])

  useEffect(() => {
    if (initRoomsUnreadMessages) {
      const roomsUnreadMessagesCount = {
        lastModifiedRoom: null,
        rooms: {}
      }
      const { rooms } = roomsMessages
      const roomIds = Object.keys(rooms)
      let roomUnreadMsgN = 0
      roomIds.forEach(roomId => {
        roomUnreadMsgN = 0
        const messages = [...rooms[roomId].oldMessages, ...rooms[roomId].recentMessages]
        messages.forEach(message => {
    
          if (userData.phone.number === message.reader) {
            if (message.reciept < 3) {
              roomUnreadMsgN += 1
            }
          }

        })
        roomsUnreadMessagesCount.rooms[roomId] = roomUnreadMsgN
      })
      dispatch(setRoomsUnreadMessagesCount(roomsUnreadMessagesCount))
      socket.connect()
    }
  }, [initRoomsUnreadMessages])

  useEffect(() => {
    if (trackRoomsMessages) {
      const { rooms } = roomsMessages
      const roomIds = Object.keys(rooms)
      roomIds.forEach(roomId => {
        const room = rooms[roomId]
        const messages = [...room.oldMessages, ...room.recentMessages]
        messages.forEach(message => {
    
          if (userData.phone.number === message.reader) {
            if (message.reciept === 1) {
              const data = {
                roomId: message.roomId,
                _id: message._id
              }
              socket.emit('to-server-reciept-ping2', data)
            }
          }

        })
      })

      setTrackRoomsMessages(false)
    }
  }, [trackRoomsMessages])
  
  useEffect(() => {
    if (trackRoomMessages) {
      const room = roomsMessages.rooms[roomsMessages.lastModifiedRoom]
      const messages = [...room.oldMessages, ...room.recentMessages]
      messages.forEach(message => {
  
        if (userData.phone.number === message.reader) {
          if (message.reciept === 1) {
            const data = {
              roomId: message.roomId,
              _id: message._id
            }
            socket.emit('to-server-reciept-ping2', data)
          }
        }

      })

      setTrackRoomMessages(false)
    }
  }, [trackRoomMessages])

  useEffect(() => {
    if (sendRoomGuestOnlineHandshake) {
      socket.emit('send-room-guest-online-handshake', sendRoomGuestOnlineHandshake)

      dispatch(setSendRoomGuestOnlineHandshake(null))
    }
    /* if (changeRoomGuestIndicator && !roomGuestOnlineHandshake) {
      if (rooms[lastModifiedRoom].guestOnline && !rooms[lastModifiedRoom].guestTyping) {
        socket.emit('indicator-room-guest-online-handshake', lastModifiedRoom)
      }
    }

    if (changeRoomGuestIndicator && roomGuestOnlineHandshake) {
      dispatch(setRoomGuestOnlineHandshake(null))
    }
    
    if (changeRoomGuestIndicator) {
      dispatch(setChangeRoomGuestIndicator(false))
    }

    if (!changeRoomGuestIndicator && roomGuestOnlineHandshake) {
      dispatch(setChangeRoomGuestIndicator(true))
    } */
    
    // if (roomGuestOnlineHandshake) {
    //   if (!rooms[lastModifiedRoom].guestOnline && !rooms[lastModifiedRoom].guestIndicator !== 'online') {
    //     dispatch(setRoomGuestOnlineHandshake(null))
    //   }
    // }
    // console.log('@"[changeRoomGuestIndicator, roomGuestOnlineHandshake]"');
  }, [sendRoomGuestOnlineHandshake])
  
  useEffect(() => {
    if (activeRoom) {
      const { roomId } = activeRoom.contact
      socket.emit('room-user-typing', { roomId, typing })
    }
  }, [typing])
  
  useEffect(() => {
    setRenderContactProfile(showRoomGuestContactProfile)
  }, [showRoomGuestContactProfile])

  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>

          <Grid item xs='auto' className='col col-1'>
            <Box className="wrapper">
              
              <Stack spacing={0} className='stack'>
                <Box className="row row-1">
                  <NavBar/>
                  <UsersStatus/> 
                </Box>
                <Box className="row row-2">
                  <ChatsList/>
                </Box>
              </Stack>
              
            </Box>
          </Grid>

          <Grid item xs className='col col-2'>
            <ChatRoom/>
          </Grid>
          
          <Grid item xs='auto' className='col col-3'>
            <Box className="wrapper">

              { renderContactProfile ? <ContactProfile /> : '' }

            </Box>
          </Grid>

        </Grid>

      </Box>
    </Root>
  )
} 