import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { Root } from "./component"

import ContactProfileAvatar from "../../components/ContactProfileAvatar"

import BackArrowIcon from '../../components/icons/BackArrow.icon'

import { setShowRoomGuestContactProfile } from '../../store/reducer/contacts'





export default function () {
  const defaultAvatar = '/image/avatar.svg'
  const { activeRoom } = useSelector(state => state.roomsStates)
  const [contactAccExist, setContactAccExist] = useState(false)
  const [guest, setGuest] = useState(null)
  const dispatch = useDispatch()
  
  const showContactProfileHandler = () => {
    dispatch(setShowRoomGuestContactProfile(false))
  }

  useEffect(() => {
    if (activeRoom) {
      const { contact } = activeRoom
      if (contact && contact.userAccExist) {
        setContactAccExist(true)
        setGuest(contact.user)
      } else {
        setContactAccExist(false)
        setGuest(contact)
      }
    }
  }, [activeRoom])

  return (
    <Root container spacing={0} direction="column" className='grid-stack'>

      <Grid item className='row row-1'>
        
        <Stack 
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          className='nav'
        >
          
          <Box 
            className="iconButton"
            onClick={showContactProfileHandler}
          >
            <BackArrowIcon
              style={{
                marginRight: 2
              }}
                />
          </Box>
          
          <Typography className="editButton">
            Edit
          </Typography>
          
        </Stack>

      </Grid>

      <Grid item className='row row-2'>
        <Box className="wrapper">

          <ContactProfileAvatar 
            style={{
              width: 195,
              height: 195,
              margin: 8
            }}
            image={contactAccExist? guest.avatar.url : defaultAvatar}
              />
          
          <Typography className="text username">
            {contactAccExist? guest.name : ''}
          </Typography>
          <Typography className="text phoneNumber">
            {guest?.phone.number}
          </Typography>

        </Box>
      </Grid>

      <Grid item className='row row-3'>
        <Box className="wrapper"></Box>
      </Grid>

    </Root>
  )
}