import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from '@mui/material/Stack'

import { Root } from "./component"
import Avatar from "../../components/Avatar"
import Bell from '../../components/icons/Bell.icon'
import Search from '../../components/icons/Search.icon'


export default function () {
  const defaultAvatar = '/image/avatar.svg'
  const { userData } = useSelector(state => state.user)
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    if (userData && userData.avatar) {
      setAvatar(userData.avatar)
    }
  }, [userData])

  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>
          <Grid item xs={6} className='col col-1'>

            <Stack direction="row" spacing={0} className='stack ui-ignore'>
              <Box className="iconButton">
                <Search/>
              </Box>
              <Box className="iconButton">
                <Bell/>
              </Box>
            </Stack>

          </Grid>
          <Grid item xs={6} className='col col-2'>

            <Avatar 
              image={avatar ? avatar.thumb_url : defaultAvatar}
              style={{
                width: 60,
                height: 60,
                marginLeft: 'auto'
              }} />

          </Grid>
        </Grid>

      </Box>
    </Root>
  )
}