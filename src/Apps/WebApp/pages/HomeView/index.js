import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import axios from "axios"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from '@mui/material/Stack'

import { Root } from "./component"

import { NavBar, UsersStatus, ChatsList, ChatRoom } from "../../sections"

import { setUserData } from '../../store/reducer/user'
import { setContacts } from '../../store/reducer/contacts'





export default function () {
  const [phonebook, setPhonebook] = useState(null)
  const accessToken = localStorage.getItem('accessToken')
  const { userData } = useSelector(state => state.user)
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
            console.log('userResponse:', response)
        }
      })
      .catch(error => {
        console.log('userErrorResponse:', error)
      })
  }, [])

  useEffect(() => {
    // console.log('userData:', userData);
    axios.get('http://localhost:5000/v1/users/user/phonebook', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      const { data } = response
      if (data.msg === 'ok') {
        const phonebookData = data.data
        setPhonebook(phonebookData)
      } else {
        console.log('phonebookResponse:', response)
      }
    })
    .catch(error => {
      console.log('phonebookErrorResponse:', error)
    })
  }, [userData])

  useEffect(() => {
    // console.log('phonebook:', phonebook);
    if (phonebook) {
      let { contacts } = phonebook
      const contactsWithExistingUser = contacts.filter(c => c.userAccExist)
      const contactsWithExistingUserIds = contactsWithExistingUser.map(c => c.userId)

      axios.get(`http://localhost:5000/v1/users/user/fetchUsers?ids=${contactsWithExistingUserIds.toString()}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        const { data } = response
        if (data.msg === 'ok') {
          const usersData = data.data
          contacts = contacts.map(c => {
            if (c.userAccExist) {
              c.user = usersData.find(user => user._id === c.userId)
            }
            return c
          })

          dispatch(setContacts(contacts))
        } else {
          console.log('fetchUsersResponse:', response)
        }
      })
      .catch(error => {
        console.log('fetchUsersErrorResponse:', error)
      })
    }
  }, [phonebook])

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

            <ChatRoom/>

          </Grid>

        </Grid>

      </Box>
    </Root>
  )
}