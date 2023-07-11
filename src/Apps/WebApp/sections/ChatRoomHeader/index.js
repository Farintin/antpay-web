import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from '@mui/material/Stack'
import Typography from "@mui/material/Typography"

import { Root } from "./component"
import Avatar from "../../components/Avatar"
import Menulist from '../../components/icons/Menulist.icon'
import Phone from '../../components/icons/Phone.icon'
import VideoCam from '../../components/icons/VideoCam.icon'

import { setShowRoomGuestContactProfile } from '../../store/reducer/contacts'





export default function () {
  const defaultAvatar = '/image/avatar.svg'
  const { activeRoom, roomsGuestIndication } = useSelector(state => state.roomsStates)
  const [contactAccExist, setContactAccExist] = useState(false)
  const [guest, setGuest] = useState(null)
  const [indicator, setIndicator] = useState('')
  const [roomId, setRoomId] = useState(null)
  const [name, setName] = useState('')
  const nameSize = 10
  const dispatch = useDispatch()

  const showContactProfileHandler = () => {
    dispatch(setShowRoomGuestContactProfile(true))
  }
  
  const indicatorHandler = () => {
    if (roomId && roomsGuestIndication) {
      // if (roomsGuestIndication.lastModifiedRoom === roomId) {
      const room = roomsGuestIndication.rooms[roomId]
      let { guestOnline, guestTyping } = room
      // console.log({ guestOnline, guestTyping })
      
      let indicator
      if (guestOnline) {
        if (guestTyping) {
          indicator = 'typing...'
        } else {
          indicator = 'online'
        }
      } else {
        indicator = ''
      }
      setIndicator(indicator)
      // }
    }
  }

  useEffect(() => {
    if (activeRoom) {
      const { contact } = activeRoom
      const { roomId } = contact
      if (contact && contact.userAccExist) {
        setContactAccExist(true)
        setGuest(contact.user)
      } else {
        setContactAccExist(false)
        setGuest(contact)
      }
      setRoomId(roomId)
    }
  }, [activeRoom])
  
  useEffect(() => {
    indicatorHandler(roomId)
  }, [roomId])
  
  useEffect(() => {
    if (guest) {
      if (contactAccExist) {
        guest.name.length > nameSize ? setName(`${guest.name.slice(0, nameSize)}...`) : setName(guest.name)
      } else {
        setName(guest.phone.number)
      }
    }
  }, [guest])

  useEffect(() => {
    indicatorHandler(roomId)
  }, [roomsGuestIndication])

  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>

          <Grid 
            item 
            xs={6} 
            className='col col-1' 
            sx={{ pl: 0 }}
            onClick={showContactProfileHandler}
          >

            <Avatar 
              style={{
                width: 51,
                height: 51
              }}
              image={contactAccExist? guest.avatar.thumb_url : defaultAvatar}
              />
            <Box>
              <Typography className="text username">
                {name}
              </Typography>
              <Typography className="text indicator">
                {indicator}
              </Typography>
            </Box>

          </Grid>

          <Grid item xs={6} className='col col-2'>

            <Stack direction="row" spacing={0} className='stack ui-ignore'>
              <Box className="iconButton">
                <Phone
                  style={{
                    width: 18
                  }}
                    />
              </Box>
              <Box className="iconButton">
                <VideoCam/>
              </Box>
              <Box className="iconButton">
                <Menulist
                  style={{
                    width: 7
                  }}
                    />
              </Box>
            </Stack>

          </Grid>

        </Grid>

      </Box>
    </Root>
  )
}