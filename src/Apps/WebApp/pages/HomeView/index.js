import { useEffect } from "react"
import { useDispatch } from "react-redux"

import axios from "axios"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from '@mui/material/Stack'

import { Root } from "./component"

import { NavBar, UsersStatus, ChatsList, ChatDm } from "../../sections"

import { setUserData } from '../../store/reducer/user'





export default function () {
  const accessToken = localStorage.getItem('accessToken')
  // console.log('accessToken:', accessToken)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:5000/v1/users/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        const { data } = response
        if (data.msg === 'ok') {
          const userData = data.data
          dispatch(setUserData(userData))
        } else {
            console.log('axiosResponse:', response)
        }
      })
      .catch(error => {
        console.log('axiosErrorResponse:', error)
      })
  }, [])
  /* useEffect(() => {
    console.log('userData:', userData);
  }, [userData]) */

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