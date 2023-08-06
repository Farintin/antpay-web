// eslint-disable-next-line
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography'

import axios from "axios"

import { Root, StyledButton } from "./component"

import { 
  AppLeftPanel, 
  ChatRoom, 
  ContactProfile, 
  Phonebook, 
  UserProfile,
  EditUserProfile } from "../../sections"
  
import { setShowLogoutModal } from '../../store/reducer/user'
import { 
  setRooms,
  setRoomsMessages,
  setRoomsGuestIndication,
  setRoomsTextInputValue,
  setRoomsUnreadMessagesCount,
  setActiveRoom } from '../../store/reducer/roomsStates'

import { socket } from '../../socket'

  






const formatMessages = (messages) => {
  let formatedMsgs = []
  if (messages?.length > 0) {
    messages.sort((a,b) => new Date(a.time) - new Date(b.time))
    let prevMsg
    let timeObj
    let prevMsgTimeObj
    messages.forEach((msg, i) => {
      timeObj = new Date(msg.time)
      if (i === 0) {
        formatedMsgs.push({ component: 'checkpoint', time: timeObj.toString() })
      } else {
        prevMsg = messages[i - 1]
        prevMsgTimeObj = new Date(prevMsg.time) 
        if (timeObj.getDate() !== prevMsgTimeObj.getDate()) {
          formatedMsgs.push({ component: 'checkpoint-terminal', time: prevMsg.time })
          formatedMsgs.push({ component: 'checkpoint', time: timeObj.toString() })
        }
      }
  
      const msgCopy = structuredClone(msg)
      msgCopy.component = 'chat-message'
      formatedMsgs.push(msgCopy)
      if (i === messages.length - 1) {
        formatedMsgs.push({ component: 'checkpoint-terminal', time: timeObj.toString() })
      }
    })
  }

  return formatedMsgs
}
const compareArrays = (arr1, arr2) => {
  arr1 = structuredClone(arr1)
  arr2 = structuredClone(arr2)
  if(arr1?.length !== arr2?.length) return false
  if(arr1.sort().toString() !== arr2.sort().toString()) return false
  return true
}



export default function () {
  const accessToken = localStorage.getItem('accessToken')
  const logoutModalDom = useRef(null)
  const { showLogoutModal, userData } = useSelector(state => state.user)
  const { 
    openEditUserProfile, 
    showRoomGuestContactProfile, 
    inAppMessage, 
    inAppError, 
    contacts } = useSelector(state => state.contacts)
  const { server } = useSelector(state => state.socketStates)
  const { 
    rooms, 
    roomsMessages,
    roomsGuestIndication,
    roomsTextInputValue,
    roomsUnreadMessagesCount,
    activeRoom } = useSelector(state => state.roomsStates)
  const [logoutModalBgClick, setLogoutModalBgClick] = useState(false)
  const [logoutModalMainClick, setLogoutModalMainClick] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const closeLogoutModalHandler = () => {
    dispatch(setShowLogoutModal(false))
  }
  const logoutHandler = () => {
    navigate('/logout')
  }



  useEffect(() => {
    console.log({ accessToken });
  }, [])
  
  useEffect(() => {
    if (contacts) {
      axios.get(`${server}/rooms/user`, { 
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(response => {
          const { data } = response
          if (data.msg === 'success') {
            const { rooms } = data.data
            dispatch(setRooms(rooms))
          } else {
            console.log('roomsResponse:', response)
          }
        })
        .catch(error => {
          console.log('roomsErrorResponse:', error)
        })

      contacts.forEach(contact => {
        if (activeRoom?.usersPhoneNumber.includes(contact.phone.number)) {
          dispatch(setActiveRoom({ ...activeRoom, contact }))
        }
      })
    }
  }, [contacts])
  
  useEffect(() => {
    if (rooms) {
      const roomsCopy = structuredClone(rooms)
      const roomsMessagesCopy = structuredClone(roomsMessages)
      const roomsGuestIndicationCopy = structuredClone(roomsGuestIndication)
      const roomsTextInputValueCopy = structuredClone(roomsTextInputValue)
      // const roomsUnreadMessagesCountCopy = structuredClone(roomsUnreadMessagesCount)
  
      roomsCopy.forEach(room => {
        const { messages, roomType, _id, newRoom } = room
  
        if (!roomsMessagesCopy.rooms.hasOwnProperty(_id)) {
          const oldMessages = formatMessages(messages)
          roomsMessagesCopy.rooms[_id] = {
            roomType,
            oldMessages,
            recentMessages: [],
            newRoom
          }
          // room.newRoom = false
          roomsMessagesCopy.lastModifiedRoom = _id
        }
        
        if (!roomsGuestIndicationCopy.rooms.hasOwnProperty(_id)) {
          roomsGuestIndicationCopy.rooms[_id] = {
            roomType,
            guestOnline: false,
            guestTyping: 0
          }
          roomsGuestIndicationCopy.lastModifiedRoom = _id
        }
  
        if (!roomsTextInputValueCopy.hasOwnProperty(_id)) {
          roomsTextInputValueCopy[_id] = ''
        }
  
        if (compareArrays(activeRoom?.usersPhoneNumber, room.usersPhoneNumber)) {
          dispatch(setActiveRoom({ ...activeRoom, ...room }))
        }
      })
      dispatch(setRoomsGuestIndication(roomsGuestIndicationCopy))
      dispatch(setRoomsMessages(roomsMessagesCopy))
      dispatch(setRoomsTextInputValue(roomsTextInputValueCopy))
      // dispatch(setRooms(roomsCopy))
      
      const roomIds = rooms.map(r => r._id)
      socket.emit('join-rooms', roomIds)
    }
  }, [rooms])
  
  useEffect(() => {
    if (roomsMessages) {
      const roomsUnreadMessagesCountCopy = structuredClone(roomsUnreadMessagesCount)

      const roomIds = Object.keys(roomsMessages.rooms)
      roomIds.forEach(id => {
        if (!roomsUnreadMessagesCountCopy.rooms.hasOwnProperty(id)) {
          const room = roomsMessages.rooms[id]
          if (room) {
            const { oldMessages, recentMessages } = room
            const messages = [...oldMessages, ...recentMessages]
            const chatMsgs = messages.filter(comp => comp.component === 'chat-message')
            const unreadMsgs = chatMsgs.filter(comp => (comp.reader === userData.phone.number && comp.reciept < 3))
            // console.log({ id, chatMsgs, unreadMsgs })
            roomsUnreadMessagesCountCopy.rooms[id] = unreadMsgs.length
          }
        }
      })
      dispatch(setRoomsUnreadMessagesCount(roomsUnreadMessagesCountCopy))
    }
  }, [roomsMessages])
  
  useEffect(() => {
    if (logoutModalBgClick && !logoutModalMainClick) {
      closeLogoutModalHandler()
    }

    if (logoutModalBgClick) setLogoutModalBgClick(false)
    if (logoutModalMainClick) setLogoutModalMainClick(false)
  }, [logoutModalBgClick, logoutModalMainClick])
  
  useEffect(() => {
    if (showLogoutModal) {
      logoutModalDom.current.classList.remove('hide')
      logoutModalDom.current.classList.add('show')
    } else {
      logoutModalDom.current.classList.remove('show')
      logoutModalDom.current.classList.add('hide')
    }
  }, [showLogoutModal])


  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>

          <Grid item xs='auto' className='col col-1'>

            <Box className="wrapper">
              <AppLeftPanel/>
              <Phonebook  
                style={{
                  position: 'absolute'
                }} 
                  />
              <UserProfile 
                style={{
                  position: 'absolute'
                }} 
                  />
              {openEditUserProfile ? 
                <EditUserProfile 
                  style={{
                    position: 'absolute'
                  }} 
                    /> : ''}
            </Box>

            <Box 
              className={`bottomNotification message ${inAppMessage === null ? 'hide': ''}`}
            >
              <Box className="wrapper">
                <Typography
                  className="text"
                >
                  {inAppMessage === null ? '' : inAppMessage}
                </Typography>
              </Box>
            </Box>
            
            <Box 
              className={`bottomNotification error ${inAppError === null ? 'hide': ''}`}
            >
              <Box className="wrapper">
                <Typography
                  className="text"
                >
                  {inAppError === null ? '' : inAppError}
                </Typography>
              </Box>
            </Box>

          </Grid>

          <Grid item xs className='col col-2'>
            <ChatRoom/>
          </Grid>
          
          <Grid item xs='auto' className='col col-3'>
            <Box className="wrapper">

              { showRoomGuestContactProfile ? <ContactProfile /> : '' }

            </Box>
          </Grid>

        </Grid>

        <Box 
          ref={logoutModalDom}
          className='logoutModal hide'
          onClick={() => setLogoutModalBgClick(true)}
        >

          <Box 
            className='wrapper'
            onClick={() => setLogoutModalMainClick(true)}
          >
            <Box className='info'>
              <Typography className="text heading">Log out?</Typography>
              <Typography className="text" sx={{ mt: 3 }}>Are you sure you want to log out?</Typography>
            </Box>
            <Box className='buttons'>
              <StyledButton
                className="button cancel"
                onClick={closeLogoutModalHandler}
              >
                <Typography className="label">
                  Cancel
                </Typography>
              </StyledButton>

              <StyledButton
                className="button"
                onClick={logoutHandler}
              >
                <Typography className="label">
                  Logout
                </Typography>
              </StyledButton>
            </Box>
          </Box>

        </Box>

      </Box>
    </Root>
  )
} 