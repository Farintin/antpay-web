import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from "react-redux"

import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'

import axios from "axios"

import { Root, Loader } from "./component"
import { LogoAquaGradientBrandnameWhiteDotAqua } from "../../components/Logo"
import E2ePadlockIcon from '../../components/icons/E2ePadlock.icon'

import { setUserData, setLogOut } from '../../store/reducer/user'
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

const defaultInfo = <Box className='wrapper'>
                      <E2ePadlockIcon style={{ marginRight: 8 }} />
                      <Typography 
                        className="text"
                      >
                        End-to-end encrypted
                      </Typography>
                    </Box>
const loadingChatsInfo = <Box className='wrapper'>
                            <Typography 
                              className="text"
                              sx={{ pt: 1 }}
                            >
                              Loading your chats...
                            </Typography>
                          </Box>



export default function () {
  const accessToken = localStorage.getItem('accessToken')
  const initMaxPercent = 5
  const maxMinPercent = 10
  const rootDom = useRef(null)
  const { userData } = useSelector(state => state.user)
  const { roomsMessages } = useSelector(state => state.roomsStates)
  const { isOnline, isConnected, server } = useSelector(state => state.socketStates)
  const [roomsData, setRoomsData] = useState(null)
  const [totLoadFrs, setTotLoadFrs] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [minPercent, setMinPercent] = useState(initMaxPercent)
  const [funcIndex, setFuncIndex] = useState(null)
  const [loadPercent, setLoadPercent] = useState(0)
  const [currentLoadFr, setCurrentLoadFr] = useState(0)
  const [info, setInfo] = useState(defaultInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const authNavigate = () => {
    setLoadPercent(100)
    console.log('authNavigate');
    localStorage.removeItem('accessToken')
    setTimeout(() => {
      navigate('/phoneSignIn')
    }, 200)
  }
  const reloadHandler = () => {
    console.log('reloadHandler');
    setTimeout(() => window.location.reload(false), 1000)
  }
  const randInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const loadedHandler = () => {
    console.log('loaded')
    navigate('/home')
  }



  const refreshToken = () => {
    if (accessToken) {
      axios.get(`${server}/auth/user/refreshToken`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        const { data } = response
        if (data.msg === 'ok') {
          const { newToken } = data.data
          localStorage.setItem('accessToken', newToken)

          // console.log('ran refreshToken');
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
  const fetchAndSetUser = () => {
    axios.get(`${server}/users/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      const { data } = response
      if (data.msg === 'ok') {
        const userData = data.data
        // console.log({ userData });
        dispatch(setUserData(userData))

        setFuncIndex(funcIndex + 1)
        // console.log('ran fetchAndSetUser');
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
  const fetchAndSetPhonebbook = () => {
    // console.log('run fetchAndSetPhonebbook');
    axios.get(`${server}/users/user/phonebook`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        // console.log('phonebookResponse:', response)
        const { data } = response
        if (data.msg === 'ok') {
          const phonebook = data.data
          dispatch(setContacts(phonebook.contacts))

          // console.log('ran fetchAndSetPhonebbook');
          setInfo(loadingChatsInfo)
          setTimeout(() => {
            setFuncIndex(funcIndex + 1)
          }, 1000)
        } else {
          reloadHandler()
          // console.log('phonebookResponse:', response)
        }
      })
      .catch(error => {
        authNavigate()
        console.log('phonebookErrorResponse:', error)
      })
  }
  const fetchAndSetRooms = () => {
    axios.get(`${server}/rooms/user`, { 
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
          // onsole.log('ran fetchAndSetRooms');
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
  const initRoomsStates = () => {
    const roomsGuestIndication = { lastModifiedRoom: null, rooms: {} }
    const roomsMessages = { lastModifiedRoom: null, rooms: {} }
    const roomsTextInputValue = {}

    roomsData.forEach(roomData => {
      const { messages, roomType, _id } = roomData
      
      roomsGuestIndication.rooms[_id] = {
        roomType,
        guestOnline: false,
        guestTyping: 0
      }

      const oldMessages = formatMessages(messages)
      roomsMessages.rooms[_id] = {
        roomType,
        oldMessages,
        recentMessages: []
      }
      
      roomsTextInputValue[_id] = ''
    })

    dispatch(setRoomsGuestIndication(roomsGuestIndication))
    dispatch(setRoomsMessages(roomsMessages))
    dispatch(setRoomsTextInputValue(roomsTextInputValue))
    dispatch(setRooms(roomsData))

    setFuncIndex(funcIndex + 1)
    // console.log('ran initRoomsStates');
  }
  const initRoomsMessagesCounts = () => {
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

    // console.log('ran initRoomsMessagesCounts');
    setFuncIndex(funcIndex + 1)
  }
  const connectSocket = () => {
    const { _id, phone } = userData
    socket.auth = { user: { _id, phone } } 
    socket.connect()
  }
  const joinSocketRooms = () => {
    const roomIds = Object.keys(roomsMessages.rooms)
    socket.emit('join-rooms', roomIds)
    
    // console.log('ran joinSocketRooms');
    setFuncIndex(funcIndex + 1)
  }
  const initialTrackRoomsMessages = () => {
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
    
    // console.log('ran initialTrackRoomsMessages');
    setInfo(defaultInfo)
    setTimeout(() => {
      setFuncIndex(funcIndex + 1)
    }, 1000)
  }
  const funcs = [
    { loadFr: 2, func: refreshToken },
    { loadFr: 3, func: fetchAndSetUser },
    { loadFr: 3, func: fetchAndSetPhonebbook },
    { loadFr: 7, func: fetchAndSetRooms },
    { loadFr: 1, func: initRoomsStates },
    { loadFr: 1, func: initRoomsMessagesCounts },
    { loadFr: 5, func: connectSocket },
    { loadFr: 2, func: joinSocketRooms },
    { loadFr: 2, func: initialTrackRoomsMessages }
  ]



  useEffect(() => {
    if (accessToken) dispatch(setLogOut(false))

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
      if (funcIndex >= funcs.length) {
        setLoadPercent(100)
        setTimeout(() => {
          setLoaded(true)
        }, 200)
      } else {
        const funcObj = funcs[funcIndex]
        const { loadFr, func } = funcObj
        const currentLoadFrIncrement = currentLoadFr + loadFr
        let percent = ((currentLoadFrIncrement/totLoadFrs) * (100-minPercent)) + minPercent
        setCurrentLoadFr(currentLoadFrIncrement)
        setLoadPercent(Math.round(percent))
        // console.log({ funcIndex });

        setTimeout(() => func(), 10)
      }
    }
  }, [funcIndex])

  useEffect(() => {
    if (loaded) {
      loadedHandler()
    }
  }, [loaded])

  useEffect(() => {
    if (isConnected) {
      // onsole.log('ran connectSocket');
      setFuncIndex(funcIndex + 1)
    }
  }, [isConnected])
  
  useEffect(() => {
    if (!isOnline) {
      navigate('/noInternet')
    }
  }, [isOnline])


  return (
    <Root ref={rootDom}>
      <Box className='wrapper'>

        <Box className='content'>
          
          <LogoAquaGradientBrandnameWhiteDotAqua 
            className="logo" />

          <Loader sx={{ m: 2.4 }}>
            <Box className="bar" sx={{ width: `${loadPercent}%` }} />
          </Loader>

          <Box 
            className="info" 
            sx={{ 
              m: 1.5,
              position: 'absolute',
              top: '100%'
            }}
          >
            {info}
          </Box>

        </Box>

      </Box>
    </Root>
  )
}