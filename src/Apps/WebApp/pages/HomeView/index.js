// eslint-disable-next-line
import { useEffect } from 'react'
import { useSelector } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography'

import { Root } from "./component"

import { 
  AppLeftPanel, 
  ChatRoom, 
  ContactProfile, 
  Phonebook, 
  UserProfile,
  EditUserProfile } from "../../sections"

  



export default function () {
  const accessToken = localStorage.getItem('accessToken')
  const { openEditUserProfile, showRoomGuestContactProfile, inAppMessage, inAppError } = useSelector(state => state.contacts)


  useEffect(() => {
    console.log({ accessToken });
  }, [])

  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>

          <Grid item xs='auto' className='col col-1'>

            <Box className="wrapper">
              <AppLeftPanel/>
              <Phonebook  
                style={{
                  position: 'absolute'
                }} 
                  />
              <UserProfile 
                style={{
                  position: 'absolute'
                }} 
                  />
              {openEditUserProfile ? 
                <EditUserProfile 
                  style={{
                    position: 'absolute'
                  }} 
                    /> : ''}
            </Box>

            <Box 
              className={`bottomNotification message ${inAppMessage === null ? 'hide': ''}`}
            >
              <Box className="wrapper">
                <Typography
                  className="text"
                >
                  {inAppMessage === null ? '' : inAppMessage}
                </Typography>
              </Box>
            </Box>
            
            <Box 
              className={`bottomNotification error ${inAppError === null ? 'hide': ''}`}
            >
              <Box className="wrapper">
                <Typography
                  className="text"
                >
                  {inAppError === null ? '' : inAppError}
                </Typography>
              </Box>
            </Box>

          </Grid>

          <Grid item xs className='col col-2'>
            <ChatRoom/>
          </Grid>
          
          <Grid item xs='auto' className='col col-3'>
            <Box className="wrapper">

              { showRoomGuestContactProfile ? <ContactProfile /> : '' }

            </Box>
          </Grid>

        </Grid>

      </Box>
    </Root>
  )
} 