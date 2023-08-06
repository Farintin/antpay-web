import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from "react-redux"

import Typography from '@mui/material/Typography'

import ClipLoader from "react-spinners/ClipLoader"

import { Root } from "./component"

import { 
  resetAuthStates
} from '../../store/reducer/userSignInState'
import { 
  setLogOut,
  resetUserStates
} from '../../store/reducer/user'
import { 
  resetContactStates
} from '../../store/reducer/contacts'
import {
  resetRoomsStates
} from '../../store/reducer/roomsStates'
import { 
  resetSocketStates
} from '../../store/reducer/socketStates'

import { socket } from '../../socket'





export default function () {
  const rootDom = useRef(null)
  // const { userData } = useSelector(state => state.user)
  const { isConnected } = useSelector(state => state.socketStates)
  // const { rooms, roomsMessages } = useSelector(state => state.roomsStates)
  const [unloaded, setUnloaded] = useState(false)
  const [funcIndex, setFuncIndex] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const unloadedHandler = () => {
    console.log('unloaded');
    // console.log({ userData, rooms, roomsMessages });
    navigate('/loader')
  }


  const disconnectSocket = () => {
    dispatch(resetSocketStates())
    socket.disconnect()
    // console.log('ran disconnectSocket');
  }
  const clearAuthState = () => {
    dispatch(resetAuthStates())
    localStorage.removeItem('accessToken')
    // console.log('ran clearAuthState');
    setFuncIndex(funcIndex + 1)
  }
  const clearUserState = () => {
    dispatch(resetUserStates())
    // console.log('ran clearUserState');
    setFuncIndex(funcIndex + 1)
  }
  const clearPhonebookState = () => {
    dispatch(resetContactStates())
    // console.log('ran clearPhonebookState');
    setFuncIndex(funcIndex + 1)
  }
  const clearRoomsStates = () => {
    dispatch(resetRoomsStates())
    // console.log('ran clearRoomsStates');
    setFuncIndex(funcIndex + 1)
  }
  const funcs = [
    disconnectSocket,
    clearAuthState,
    clearUserState,
    clearPhonebookState,
    clearRoomsStates
  ]



  useEffect(() => {
    dispatch(setLogOut(true))
    setTimeout(() => {
      setFuncIndex(0)
    }, 1000)
  }, [])

  useEffect(() => {
    if (funcIndex !== null) {
      const func = funcs[funcIndex]
  
      if (funcIndex >= funcs.length) {
        setTimeout(() => {
          setUnloaded(true)
        }, 1000)
      } else {
        setTimeout(() => func(), 10)
      }
    }
  }, [funcIndex])

  useEffect(() => {
    if (unloaded) {
      unloadedHandler()
    }
  }, [unloaded])

  useEffect(() => {
    if (isConnected === false) {
      // console.log('socket disconnected');
      setFuncIndex(funcIndex + 1)
    }
  }, [isConnected])


  return (
    <Root ref={rootDom}>

      <ClipLoader 
        color="#fff"// "#36d7b7"
        loading
        size={90}
        speedMultiplier={1}
        aria-label="Loading Spinner"
        data-testid="loader" 
          />

      <Typography 
        className="text heading"
        sx={{ mt: 4 }}
      >
        Logging Out
      </Typography>

      <Typography 
        className="text"
        sx={{ mt: 3 }}
      >
        Do not unload this screen
      </Typography>

    </Root>
  )
}