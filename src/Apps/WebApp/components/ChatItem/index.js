// eslint-disable-next-line
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { Root } from "./component"

import Avatar from "../Avatar"

import TickIcon from '../icons/Tick.icon'
import TickDoubleIcon from '../icons/TickDouble.icon'

import { setActiveRoom } from "../../store/reducer/roomsStates"





export default function ({ contact, style }) {
  const defaultAvatar = '/image/avatar.svg'
  const defaultDesc = 'Contact not using Antpay'
  const [user, setUser] = useState(null)
  const [name, setName] = useState(contact.phone.number)
  const [desc, setDesc] = useState(defaultDesc)
  const [lastMsgTime, setLastMsgTime] = useState('')
  const [handleLastMsg, setHandleLastMsg] = useState(false)
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0)
  const [tick, setTick] = useState('')
  const { userData } = useSelector(state => state.user)
  const { activeRoom, roomsMessages, roomsUnreadMessagesCount } = useSelector(state => state.roomsStates)
  const { roomId } = contact
  const nameSize = 15
  const descSize = 15
  const dispatch = useDispatch()

  

  const contactClickHandler = () => {
    const room = { roomType: 'pair', contact }
    if (roomId !== activeRoom?.contact.roomId) dispatch(setActiveRoom(room))
  }
  
  const setDescHandler = (value) => {
    if (value.length > descSize) {
      setDesc(`${value.slice(0, descSize)}...`)
    } else {
      setDesc(value)
    }
  }

  const setLastMsgTimeHandler = (time) => {
    let timeFormat = new Date(time).toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })
    const timeObj = new Date(time)
    const currentTimeObj = new Date(Date.now())
    if (currentTimeObj.getFullYear() === timeObj.getFullYear()) {
      if (currentTimeObj.getMonth() === timeObj.getMonth()) {
        const dateDiff = currentTimeObj.getDate() - timeObj.getDate()
        if (dateDiff < 7) {
          if (dateDiff === 0) {
            timeFormat = timeObj.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
          } else if (dateDiff === 1) {
            timeFormat = 'Yesterday'
          } else {
            timeFormat = timeObj.toLocaleString('en-US', { weekday: 'long' })
          }
        }
      }
    }
    
    setLastMsgTime(timeFormat)
  }


  useEffect(() => {
    if (contact && contact.userAccExist) {
      setUser(contact.user)
    }
  }, [])
  
  useEffect(() => {
    if (user !== null) {
      user.name.length > nameSize ? setName(`${user.name.slice(0, nameSize)}...`) : setName(user.name)
      if (desc === defaultDesc) {
        setDescHandler(user.status)
      }
    }
  }, [user])
  
  useEffect(() => {
    if (roomsMessages) {
      if (roomId && roomId === roomsMessages.lastModifiedRoom) {
        setHandleLastMsg(true)
      }
      
      if (roomsMessages.lastModifiedRoom === null) {
        setHandleLastMsg(true)
      }
    }
  }, [roomsMessages])
  
  useEffect(() => {
    if (handleLastMsg) {
      const room = roomsMessages.rooms[roomId]
      
      let messages = room.recentMessages.filter(comp => comp.component === 'chat-message')
      let lastMsg
      if (messages.length > 0) {
        lastMsg = messages[messages.length - 1]
        setDescHandler(lastMsg.text)
        setLastMsgTimeHandler(lastMsg.time)
      }
      if (!lastMsg) {
        messages = room.oldMessages.filter(comp => comp.component === 'chat-message')
        if (messages.length > 0) {
          lastMsg = messages[messages.length - 1]
          setDescHandler(lastMsg.text)
          setLastMsgTimeHandler(lastMsg.time)
        }
      }

      if (lastMsg) {
        if (lastMsg.author === userData.phone.number) {
          switch (lastMsg.reciept) {
            case 1:
                setTick(<TickIcon width={16.5} color="#aaa" style={{ strokeWidth: 1.2 }} />)
                break;
                
            case 2:
                setTick(<TickDoubleIcon width={19.5} color="#aaa" style={{ strokeWidth: 1.2 }} />)
                break;
                
            case 3:
                setTick(<TickDoubleIcon width={19.5} style={{ strokeWidth: 1.2 }} />)
                break;
        
            default:
                break;
          }
        } else {
          setTick('')
        }
      }

      setHandleLastMsg(false)
    }
  }, [handleLastMsg])
  
  useEffect(() => {
    if (roomsUnreadMessagesCount !== null && roomId) {
      const count = roomsUnreadMessagesCount.rooms[roomId]
      setUnreadMessagesCount(count)
    }
  }, [roomsUnreadMessagesCount])

  return (
    <Root 
      style={style}
      onClick={contactClickHandler}
    >
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>

          <Grid item xs={2.7} className='col col-1'>
            <Avatar 
              style={{
                '--borderColor': '#6E01CE',
                width: 60,
                height: 60,
                borderWidth: 3
              }}
              image={user ? user.avatar.thumb_url : defaultAvatar}
                />
          </Grid>

          <Grid item xs={9.3} className='col col-2'>

            <Grid container spacing={0} className='grid'>

              <Grid item xs={8.7} className='col col-1'>

                <Typography className="text name bold">
                  {name}
                </Typography>

              </Grid>

              <Grid item xs={3.3} className='col col-2'>

                <Typography className={`text time ${lastMsgTime.includes(' AM') || lastMsgTime.includes(' PM') ? 'fs-lg' : 'fs-sm'}`}>
                  {lastMsgTime}
                </Typography>

              </Grid>
              
              <Grid item xs={8.7} className='col col-3'>

                <Box className="tick">
                  {tick}
                </Box>
                <Typography className="text chat">
                  {desc}
                </Typography>

              </Grid>

              <Grid item xs={3.3} className='col col-4'>

                <Box 
                  className={`n ${unreadMessagesCount === 0 ? 'hide' : ''}`}
                >
                  <Typography className="text">
                    {unreadMessagesCount}
                  </Typography>
                </Box>

              </Grid>

            </Grid>

          </Grid>
          
        </Grid>

      </Box>
    </Root>
  )
}