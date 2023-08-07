// eslint-disable-next-line
import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { Root } from "./component"

import Avatar from "../Avatar"

import TickIcon from '../icons/Tick.icon'
import TickDoubleIcon from '../icons/TickDouble.icon'

import { setActiveRoom } from "../../store/reducer/roomsStates"





export default function ({ room, style, ...others }) {
  const defaultAvatar = '/image/avatar.svg'
  const defaultDesc = 'Contact not using Antpay'
  const { userData } = useSelector(state => state.user)
  const { contacts } = useSelector(state => state.contacts)
  const { activeRoom, roomsMessages, roomsUnreadMessagesCount } = useSelector(state => state.roomsStates)
  const [contact, setContact] = useState(null)
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [lastMsgTime, setLastMsgTime] = useState('')
  const [handleLastMsg, setHandleLastMsg] = useState(false)
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0)
  const [tick, setTick] = useState('')
  const roomId = room._id
  const nameSize = 15
  const descSize = 20
  const dispatch = useDispatch()

  

  const contactHandler = () => {
    const contact = contacts.find(contact => contact.roomId === roomId)
    if (contact) {
      setContact(contact)
    }
  }
  const contactClickHandler = () => {
    if (roomId !== activeRoom?._id) {
      const activeRoomObj = { ...room, contact: contact ? { ...contact, user } : null }
      dispatch(setActiveRoom(activeRoomObj))
    } else {
      console.log('room already active')
    }
  }
  const descHandler = (value) => {
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
  const unreadMsgsHandler = () => {
    const count = roomsUnreadMessagesCount.rooms[roomId]
    setUnreadMessagesCount(count)
  }



  useEffect(() => {
    contactHandler()
    setHandleLastMsg(true)
    unreadMsgsHandler()
  }, [])

  useEffect(() => {
    contactHandler()
  }, [contacts])

  useEffect(() => {
    if (contact?.userAccExist) {
      setUser(contact.user)
    }
  }, [contact])
  
  useEffect(() => {
    if (user !== null) {
      user.name.length > nameSize ? setName(`${user.name.slice(0, nameSize)}...`) : setName(user.name)
    } else if (contact !== null) {
      setName(contact.phone.number)
    } else {
      setName(room.usersPhoneNumber.find(phoneNumber => phoneNumber !== userData.phone.number))
      descHandler(defaultDesc)
    }
  }, [user])
  
  useEffect(() => {
    handleLastMsg === true ? setHandleLastMsg(null) : setHandleLastMsg(true)
  }, [roomsMessages])
  
  useEffect(() => {
    if (handleLastMsg === true || handleLastMsg === null) {
      const room = roomsMessages.rooms[roomId]
      if (room) {
        let messages = room.recentMessages.filter(comp => comp.component === 'chat-message')
        let lastMsg
        if (messages.length > 0) {
          lastMsg = messages[messages.length - 1]
          descHandler(lastMsg.text)
          setLastMsgTimeHandler(lastMsg.time)
        }
        if (!lastMsg) {
          messages = room.oldMessages.filter(comp => comp.component === 'chat-message')
          if (messages.length > 0) {
            lastMsg = messages[messages.length - 1]
            descHandler(lastMsg.text)
            setLastMsgTimeHandler(lastMsg.time)
          }
        }
  
        if (lastMsg) {
          if (lastMsg.author === userData.phone.number) {
            switch (lastMsg.reciept) {
              case 0:
                  setTick('')
                  break;
                  
              case 1:
                  setTick(<TickIcon width={16.5} color="#888" style={{ strokeWidth: 1 }} />)
                  break;
                  
              case 2:
                  setTick(<TickDoubleIcon width={19.5} color="#888" style={{ strokeWidth: 1 }} />)
                  break;
                  
              case 3:
                  setTick(<TickDoubleIcon width={19.5} style={{ strokeWidth: 1 }} />)
                  break;
          
              default:
                  break;
            }
          } else {
            setTick('')
          }
        } else {
          setTick('')
        }
      }
  
      setHandleLastMsg(false)
    }
  }, [handleLastMsg])
  
  useEffect(() => {
    unreadMsgsHandler()
  }, [roomsUnreadMessagesCount])


  return (
    <Root 
      style={style}
      {...others}
      onClick={contactClickHandler}
      className="chatItem"
    >
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>

          <Grid item xs={2.5} className='col col-1'>
            <Avatar 
              style={{
                '--borderColor': '#6E01CE',
                width: 51,
                height: 51,
                borderWidth: 2.4
              }}
              image={user ? user.avatar.thumb_url : defaultAvatar}
                />
          </Grid>

          <Grid item xs={9.5} className='col col-2'>

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
                {
                  unreadMessagesCount > 0 ? 
                    <Box
                      className={`n`}
                    >
                      <Typography className="text">
                        {unreadMessagesCount}
                      </Typography>
                    </Box> : 
                    <Box 
                      className='n hide'
                    >
                      <Typography className="text">
                        0
                      </Typography>
                    </Box>
                }
              </Grid>

            </Grid>

          </Grid>
          
        </Grid>

      </Box>
    </Root>
  )
}