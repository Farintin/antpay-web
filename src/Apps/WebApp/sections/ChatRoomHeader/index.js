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
  const { userData } = useSelector(state => state.user)
  const { activeRoom, roomsGuestIndication } = useSelector(state => state.roomsStates)
  const [indicator, setIndicator] = useState('')
  const [roomId, setRoomId] = useState(null)
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState(defaultAvatar)
  const nameSize = 10
  const dispatch = useDispatch()


  const showContactProfileHandler = () => {
    dispatch(setShowRoomGuestContactProfile(true))
  }

  const indicatorHandler = () => {
    if (roomId && roomsGuestIndication) {
      const room = roomsGuestIndication.rooms[roomId]
      let { guestOnline, guestTyping } = room
      
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
    }
  }


  useEffect(() => {
    if (activeRoom) {
      const { contact } = activeRoom
      setRoomId(activeRoom._id)
      
      if (contact && contact.userAccExist) {
        contact.user.name.length > nameSize ? setName(`${contact.user.name.slice(0, nameSize)}...`) : setName(contact.user.name)
        setAvatar(contact.user.avatar.thumb_url)
      }
      if (contact && !contact.userAccExist) {
        setName(contact.phone.number)
        setAvatar(defaultAvatar)
      }
      if (!contact) {
        const guestPhoneNumber = activeRoom.usersPhoneNumber.find(phoneNumber => userData.phone.number !== phoneNumber)
        setName(guestPhoneNumber)
        setAvatar(defaultAvatar)
      }
    }
  }, [activeRoom])
  
  useEffect(() => {
    indicatorHandler()
  }, [roomId])
  
  useEffect(() => {
    indicatorHandler()
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
          >

            <Box 
              className="guestInfo"
              onClick={showContactProfileHandler}
            >
              <Avatar 
                style={{
                  width: 48,
                  height: 48
                }}
                image={avatar}
                />
              <Box>
                <Typography className="text username">
                  {name}
                </Typography>
                <Typography className="text indicator">
                  {indicator}
                </Typography>
              </Box>
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