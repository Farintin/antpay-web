import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from "react-redux"

import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'

import axios from "axios"

import { Root, Loader } from "./component"
import { LogoAquaGradientBrandnameWhiteDotAqua } from "../../components/Logo"

import { setUserData } from '../../store/reducer/user'
import { setContacts } from '../../store/reducer/contacts'
import {
  setRooms,
  setRoomsMessages,
  setRoomsTextInputValue,
  setRoomsUnreadMessagesCount,
  setRoomsGuestIndication
} from '../../store/reducer/roomsStates'
import { setIsConnected } from '../../store/reducer/socketStates'

import { socket } from '../../socket'



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



export default function () {
  const accessToken = localStorage.getItem('accessToken')
  const initMaxPercent = 5
  const maxMinPercent = 10
  const rootDom = useRef(null)
  const { userData } = useSelector(state => state.user)
  const { contacts } = useSelector(state => state.contacts)
  const { roomsMessages } = useSelector(state => state.roomsStates)
  const { isConnected } = useSelector(state => state.socketStates)
  const [ roomsData, setRoomsData] = useState(null)
  const [totLoadFrs, setTotLoadFrs] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [minPercent, setMinPercent] = useState(initMaxPercent)
  const [funcIndex, setFuncIndex] = useState(null)
  const [loadPercent, setLoadPercent] = useState(0)
  const [currentLoadFr, setCurrentLoadFr] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const authNavigate = () => {
    navigate('/phoneSignIn')
  }
  const reloadHandler = () => {
    setTimeout(() => window.location.reload(false), 1000)
  }
  const randInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const loadedHandler = () => {
    console.log('loaded');
    // navigate('/setProfile')
    // navigate('/phoneSignIn')
    navigate('/home')
  }


  const refreshToken = () => {
    // console.log('accessToken:', accessToken);
    if (accessToken) {
      axios.get('http://localhost:5000/v1/auth/user/refreshToken', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        const { data } = response
        if (data.msg === 'ok') {
          const { newToken } = data.data
          localStorage.setItem('accessToken', newToken)

          console.log('ran refreshToken');
          setFuncIndex(funcIndex + 1)
        } else {
          reloadHandler()
          console.log('refreshTokenResponse:', response)
        }
      })
      .catch(error => {
        authNavigate()
        console.log('refreshTokenErrorResponse:', error)
      })
    } else {
      console.log('no access token')
      authNavigate()
    }
  }
  const func1 = () => {
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

        setFuncIndex(funcIndex + 1)
        console.log('ran func1');
      } else {
        reloadHandler()
        console.log('userResponse:', response)
      }
    })
    .catch(error => {
      authNavigate()
      console.log('userErrorResponse:', error)
    })
  }
  const func2 = () => {
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

          setFuncIndex(funcIndex + 1)
          console.log('ran func2');
        } else {
          reloadHandler()
          console.log('phonebookResponse:', response)
        }
      })
      .catch(error => {
        authNavigate()
        console.log('phonebookErrorResponse:', error)
      })
  }
  const func3 = () => {
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

            console.log('ran func3.0');
            setTimeout(() => {
              func3()
            }, 1000)
          } else {
            reloadHandler()
            console.log('assignContactToRoomsResponse:', response)
          }
        })
        .catch(error => {
          authNavigate()
          console.log('assignContactToRoomsErrorResponse:', error)
        })
    } else {
      axios.get('http://localhost:5000/v1/rooms/user', { 
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(response => {
          const { data } = response
          if (data.msg === 'success') {
            const { rooms } = data.data
            setRoomsData(rooms)

            setFuncIndex(funcIndex + 1)
            console.log('ran func3.1');
          } else {
            reloadHandler()
            console.log('roomsResponse:', response)
          }
        })
        .catch(error => {
          authNavigate()
          console.log('roomsErrorResponse:', error)
        })
    }
  }
  const func4 = () => {
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
    dispatch(setRooms(roomsData))

    setFuncIndex(funcIndex + 1)
    console.log('ran func4');
  }
  const func5 = () => {
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

    console.log('ran func5');
    setFuncIndex(funcIndex + 1)
  }
  const func6 = () => {
    socket.connect()
  }
  const func7 = () => {
    const roomIds = Object.keys(roomsMessages.rooms)
    socket.emit('join-rooms', roomIds)
    
    console.log('ran func7');
    setFuncIndex(funcIndex + 1)
  }
  const func8 = () => {
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
    
    console.log('ran func8');
    setFuncIndex(funcIndex + 1)
  }
  const funcs = [
    { loadFr: 2, func: refreshToken },
    { loadFr: 3, func: func1 },
    { loadFr: 3, func: func2 },
    { loadFr: 7, func: func3 },
    { loadFr: 1, func: func4 },
    { loadFr: 1, func: func5 },
    { loadFr: 5, func: func6 },
    { loadFr: 2, func: func7 },
    { loadFr: 2, func: func8 }
  ]



  useEffect(() => {
    let totLoadFrsIncrement = totLoadFrs
    funcs.forEach(funcObj => totLoadFrsIncrement += funcObj.loadFr)
    setTotLoadFrs(totLoadFrsIncrement)
    
    const onConnect = () => {
      dispatch(setIsConnected(true))
    }
    const onDisconnect = () => {
      dispatch(setIsConnected(false))
    }
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    
    setTimeout(() => {
      const randPercent = randInteger(1, initMaxPercent)
      setLoadPercent(randPercent)

      setTimeout(() => {
        const randMinPercent = randInteger(initMaxPercent+1, maxMinPercent)
        setMinPercent(randMinPercent)
        setLoadPercent(randMinPercent)

        setTimeout(() => {
          setFuncIndex(0)
        }, 1000)
      }, 1000)
    }, 1000)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])

  useEffect(() => {
    if (funcIndex !== null) {
      let percent
      const funcObj = funcs[funcIndex]
      if (funcObj) {
        const { loadFr, func } = funcObj
        const currentLoadFrIncrement = currentLoadFr + loadFr
        percent = ((currentLoadFrIncrement/totLoadFrs) * (100-minPercent)) + minPercent
        setCurrentLoadFr(currentLoadFrIncrement)

        setLoadPercent(Math.round(percent))
        setTimeout(() => func(), 10)
      }
  
      if (funcIndex >= funcs.length) {
        setLoadPercent(100)
        setTimeout(() => {
          setLoaded(true)
        }, 1000)
      }
    }
  }, [funcIndex])

  useEffect(() => {
    // console.log({ loadPercent });
  }, [loadPercent])

  useEffect(() => {
    if (loaded) {
      loadedHandler()
    }
  }, [loaded])

  useEffect(() => {
    if (isConnected) {
      console.log('ran func6 socket connected');
      setFuncIndex(funcIndex + 1)
    }
  }, [isConnected])


  return (
    <Root ref={rootDom}>

      <LogoAquaGradientBrandnameWhiteDotAqua 
        className="logo" />

      <Loader sx={{ m: 2.4 }}>
        <Box className="bar" sx={{ width: `${loadPercent}%` }} />
      </Loader>

      <Box className="e2e" sx={{ m: 1.5 }}>
        <svg 
          id="Layer_2" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 341.1 403.93"
          className='padlock'
        >
          <g id="Layer_1-2">
            <g>
              <path d="M157.89,0c8.03,0,16.05,0,24.08,0,.37,.35,.7,.95,
              1.11,1.01,51.4,8.02,85.4,37.4,102.6,85.79,4.43,12.48,5.19,
              26.5,6.14,39.91,1,14.19,.23,28.51,.23,
              43.23h49.05v233.69H198.28v-45.78h80.9v-45.9h-43.05v-49.34h43.03v-44.75h-80.85v-48.19h41.95c0-16.46,
              .4-32.46-.11-48.44-.56-17.71-6.18-33.87-18.6-46.83-19.66-20.52-43.58-27.54-71.01-19.61-26.99,
              7.8-43.58,25.74-46.57,53.99-1.94,18.36-1.6,36.96-2.25,
              55.46-.05,1.44,.21,2.88,.36,
              4.75h45.08v49.34H61.99v44.75h45.03v49.14H61.81v44.55h86.51v47.17H0V167.26H48.06c1.03-20.04,
              1.37-39.64,3.17-59.11C55.89,57.51,94.14,14.54,143.79,3.26,148.49,2.19,153.19,1.09,157.89,0Z"/>
              <path d="M196.64,312.94h-47.69v-48.86h47.69v48.86Z"/>
            </g>
          </g>
        </svg>
        <Typography 
          className="text"
        >
          End-to-end encrypted
        </Typography>
      </Box>

    </Root>
  )
}