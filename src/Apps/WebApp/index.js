import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
// -----------------------------------------------------
import ThemeProvider from './theme'
import Layout from './layout'
import Splash from './pages/Splash'
import QrSignIn from './pages/QrSignIn'
import PhoneSignIn from './pages/PhoneSignIn'
import OtpSignIn from './pages/OtpSignIn'
import SetProfile from './pages/SetProfile'
import HomeView from './pages/HomeView'
import LogOut from './pages/LogOut'
import NoInternet from './pages/NoInternet'
import './App.css'
// -----------------------------------------------------
import { 
  setIsOnline,
  setIsConnected,
  setNewMessage,
  setRecieptPing1,
  setRecieptPing2,
  setRecieptPing3,
  setNewConversation } from './store/reducer/socketStates'
import { setInAppMessage, setInAppError } from './store/reducer/contacts'
import {
  setRooms,
  setRoomMessages,
  setActiveRoom,

  incrementRoomUnreadMessagesCount,
  setTotUnreadMsgs,

  updateMessageReciept1,
  updateMessageReciept2,
  updateMessagesReciept3,

  setTyping,
  setRoomGuestOnline,
  setSendRoomGuestOnlineHandshake,
  setRoomGuestTyping } from './store/reducer/roomsStates'
// -----------------------------------------------------
import { socket } from './socket'  

import sentMsgSfx from '../../sounds/among_us_chat.mp3'
import incomingMsgSfx from '../../sounds/facebook_chat_sound.mp3'








export default function () {
  const { userData, logOut } = useSelector(state => state.user)
  const {
    isConnected, 
    isOnline, 
    newMessage, 
    recieptPing1, 
    recieptPing2, 
    recieptPing3,
    newConversation } = useSelector(state => state.socketStates)
  const { contacts, inAppMessage, inAppError } = useSelector(state => state.contacts)
  const {
    activeRoom,
    rooms,
    roomsMessages,
    roomsUnreadMessagesCount,
    totUnreadMsgs,
    sendRoomGuestOnlineHandshake,
    typing } = useSelector(state => state.roomsStates)
  const [ trackRoomsMessages, setTrackRoomsMessages ] = useState(false)
  const [ trackRoomMessages, setTrackRoomMessages ] = useState(false)
  const sentMsgAudio = new Audio(sentMsgSfx)
  const incomingMsgAudio = new Audio(incomingMsgSfx)
  const dispatch = useDispatch()
    


  const onlineHandler = () => {
    dispatch(setIsOnline(true))
  }
  const offlineHandler = () => {
    dispatch(setIsOnline(false))
  }



  useEffect(() => {
    // console.log('openedAppAt:', openedAppAt);
    window.addEventListener("online", onlineHandler)
    window.addEventListener("offline", offlineHandler)

      
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
    const onNewConversation = (data) => {
      dispatch(setNewConversation(data))
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
    socket.on('newConversation', onNewConversation)
    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
      
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('recieve-message', onNewMessage)
      socket.off('to-client-reciept-ping1', onRecieptPing1)
      socket.off('to-client-reciept-ping2', onRecieptPing2)
      socket.off('to-client-reciept-ping3', onRecieptPing3)
      socket.off('room-guest-online', onRoomGuestOnline)
      socket.off('room-guest-typing', onRoomGuestTyping)
      socket.off('room-guest-online-handshake', onRoomGuestOnlineHandshake)
      socket.off('newConversation', onNewConversation)
    }
  }, [])

  useEffect(() => {
    isOnline && isConnected === false ? socket.connect() : socket.disconnect()
  }, [isOnline])

  useEffect(() => {
    // console.log({ isConnected, logOut, isOnline });
    if (isConnected === false && !logOut && isOnline) {
      socket.connect()
    }
    
    if (isConnected === true) {
      if (roomsMessages) {
        const roomIds = Object.keys(roomsMessages.rooms)
        socket.emit('join-rooms', roomIds)
        setTrackRoomsMessages(true)
      }
    }
  }, [isConnected])

  useEffect(() => {
    if (newMessage) {
      const message = structuredClone(newMessage)

      dispatch(setRoomMessages(message))

      if (userData.phone.number === message.author) {
        sentMsgAudio.play()
      }

      if (userData.phone.number === message.reader) {
        message.sid = ''
        dispatch(incrementRoomUnreadMessagesCount({ roomId: message.roomId }))
        const pingData = {
          roomId: message.roomId,
          _id: message._id
        }
        incomingMsgAudio.play()
        socket.emit('to-server-reciept-ping2', pingData)
      }
      
      if (userData.phone.number === message.author) {
        socket.emit('send-message', message)
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
    if (trackRoomsMessages) {
      const { rooms } = roomsMessages
      const roomIds = Object.keys(rooms)

      roomIds.forEach(roomId => {
        const room = rooms[roomId]
        const messages = [...room.oldMessages, ...room.recentMessages]

        messages.forEach(message => {
    
          if (userData.phone.number === message.author) {
            if (message.reciept === 0) {
              socket.emit('send-message', message)
            }
          }

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
    if (rooms && activeRoom) {
      const roomId = activeRoom._id
      const room = rooms.find(room => room._id === roomId)
      if (room) {
        let contact = contacts.find(contact => contact.roomId === roomId)
        let user = null
        if (contact) {
          if (contact.user) {
            user = contact.user
          }
        }
        
        const activeRoomObj = { ...room, contact: contact ? { ...contact, user } : null }
        dispatch(setActiveRoom(activeRoomObj))
      }
    }
  }, [rooms]) 

  useEffect(() => {
    if (sendRoomGuestOnlineHandshake) {
      socket.emit('send-room-guest-online-handshake', sendRoomGuestOnlineHandshake)

      dispatch(setSendRoomGuestOnlineHandshake(null))
    }
  }, [sendRoomGuestOnlineHandshake])
  
  useEffect(() => {
    if (typing) {
      const roomId = activeRoom._id
      socket.emit('room-user-typing', { roomId, typing })
      
      dispatch(setTyping(false))
    }
  }, [typing])
  
  useEffect(() => {
    if (inAppMessage !== null) {
      setTimeout(() => {
        dispatch(setInAppMessage(null))
      }, 5000);
    }
  }, [inAppMessage])
  
  useEffect(() => {
    if (inAppError !== null) {
      setTimeout(() => {
        dispatch(setInAppError(null))
      }, 5000);
    }
  }, [inAppError])
  
  useEffect(() => {
    if (roomsUnreadMessagesCount !== null) {
      const counts = Object.values(roomsUnreadMessagesCount.rooms)
      if (counts.length > 0) {
        const count = counts.reduce((t,n) => t+n)
        dispatch(setTotUnreadMsgs(count))
      }
    }
  }, [roomsUnreadMessagesCount])
  
  useEffect(() => {
    if (newConversation) {
      const { room } = newConversation
      const roomsCopy = structuredClone(rooms)
      const roomCopy = structuredClone(room)
      roomCopy.newRoom = true
      dispatch(setRooms([...roomsCopy, roomCopy]))
      incomingMsgAudio.play()

      const { messages } = room
      const { _id, roomId } = messages[messages.length - 1]
      const pingData = { roomId, _id }
      socket.emit('to-server-reciept-ping2', pingData)

      dispatch(setNewConversation(null))
    }
  }, [newConversation])


  return (
    <ThemeProvider>
      <AnimatePresence>

        <Helmet key={1}>
          <title>{totUnreadMsgs > 0 ? `(${totUnreadMsgs}) ` : ''}Antpay</title>
        </Helmet>
        
        <Routes>
          <Route path="" element={<Layout title="" />}>
            <Route path="/" element={<PhoneSignIn title="" />} />
            <Route path="/qrSignIn" element={<QrSignIn title="" />} />
            <Route path="/phoneSignIn" element={<PhoneSignIn title="" />} />
            <Route path="/loader" element={<Splash title="" />} />
            <Route path="/otpSignIn" element={<OtpSignIn title="" />} />
            <Route path="/setProfile" element={<SetProfile title="" />} />
            <Route path="/home" element={<HomeView title="" />} />
            <Route path="/logOut" element={<LogOut title="" />} />
            <Route path="/noInternet" element={<NoInternet title="" />} />
          </Route>
        </Routes>

      </AnimatePresence>
    </ThemeProvider>
  )
}