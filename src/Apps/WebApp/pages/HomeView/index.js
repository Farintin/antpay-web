import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from '@mui/material/Stack'
import { Root } from "./component"
import { NavBar, UsersStatus, ChatsList, ChatDm } from "../../sections"



export default function () {

  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>
          <Grid item xs={3.9} className='col col-1'>

            <Stack spacing={0} className='stack'>
              <Box className="row row-1">

                <NavBar/>
                <UsersStatus/> 
                
              </Box>
              <Box className="row row-2">

                <ChatsList/>

              </Box>
            </Stack>

          </Grid>
          <Grid item xs={8.1} className='col col-2'>

            <ChatDm/>

          </Grid>
        </Grid>

      </Box>
    </Root>
  )
}