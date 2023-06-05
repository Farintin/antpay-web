import { useSelector } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from '@mui/material/Stack'
import { Typography } from "@mui/material"

import { Root } from "./component"
import Avatar from "../../components/Avatar"
import Menulist from '../../components/icons/Menulist.icon'
import Phone from '../../components/icons/Phone.icon'
import VideoCam from '../../components/icons/VideoCam.icon'





export default function () {
  const { activeRoom } = useSelector(state => state.socketStates)
  const defaultAvatar = '/image/avatar.svg'
  let user
  let contact
  
  if (activeRoom) {
    contact = activeRoom.guest
    if (contact && contact.userAccExist) {
      user = contact.user
    }
  }

  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>

          <Grid item xs={6} className='col col-1' sx={{ pl: 0 }}>

            <Avatar 
              style={{
                width: 48,
                height: 48
              }}
              image={user ? user.avatar.thumb_url : defaultAvatar}
              />
            <Typography className="text username">
              {user ? user.name : contact?.phone.number}
            </Typography>

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