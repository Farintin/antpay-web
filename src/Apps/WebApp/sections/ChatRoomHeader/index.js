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
  const { userData } = useSelector(state => state.user)

  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>

          <Grid item xs={6} className='col col-1' sx={{ pl: 0 }}>

            <Avatar 
              style={{
                width: 43.5,
                height: 43.5
              }}
              image={userData?.avatar.thumb_url}
              />
            <Typography className="text username">
              {userData?.name}
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