import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from '@mui/material/Stack'
import { Root } from "./component"
import Avatar from "../../components/Avatar"
import Menulist from '../../components/icons/Menulist.icon'
import Bell from '../../components/icons/Bell.icon'
import Search from '../../components/icons/Search.icon'



export default function () {

  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>
          <Grid item xs={6} className='col col-1'>

            <Stack direction="row" spacing={0} className='stack'>
              <Box className="iconButton">
                <Menulist/>
              </Box>
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
              image='/image/avatarPic.png'
              style={{
                marginLeft: 'auto'
              }} />

          </Grid>
        </Grid>

      </Box>
    </Root>
  )
}