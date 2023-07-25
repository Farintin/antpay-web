// eslint-disable-next-line
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { Root } from "./component"

import Avatar from "../Avatar"

import { setActiveRoom } from "../../store/reducer/roomsStates"





export default function ({ contact, style }) {
  const defaultAvatar = '/image/avatar.svg'
  const defaultDesc = 'Contact not using Antpay'
  const [room, setRoom] = useState(null)
  const [user, setUser] = useState(null)
  const [name, setName] = useState(contact.phone.number)
  const [desc, setDesc] = useState(defaultDesc)
  const { rooms, activeRoom } = useSelector(state => state.roomsStates)
  const { roomId } = contact
  const nameSize = 15
  const descSize = 25
  const dispatch = useDispatch()

  

  const contactClickHandler = () => {
    if (roomId !== activeRoom?._id) {
      const activeRoomObj = { ...room, contact: contact ? { ...contact, user } : null }
      console.log({ activeRoomObj });
      dispatch(setActiveRoom(activeRoomObj))
    }
  }
  
  const setDescHandler = (value) => {
    if (value.length > descSize) {
      setDesc(`${value.slice(0, descSize)}...`)
    } else {
      setDesc(value)
    }
  }

  useEffect(() => {
    if (contact?.userAccExist) setUser(contact.user)
  }, [contact])
  
  useEffect(() => {
    if (user !== null) {
      user.name.length > nameSize ? setName(`${user.name.slice(0, nameSize)}...`) : setName(user.name)
      if (desc === defaultDesc) {
        setDescHandler(user.status)
      }
    }
  }, [user])
  
  useEffect(() => {
    if (rooms) {
      const room = rooms.find(room => room._id === roomId)
      if (room) setRoom(room)
    }
  }, [rooms])
  
  return (
    <Root 
      style={style}
      onClick={contactClickHandler}
      className="contactItem"
    >
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>

          <Grid item xs={2.7} className='col col-1'>
            <Avatar 
              style={{
                '--borderColor': '#6E01CE',
                width: 54,
                height: 54,
                borderWidth: 2
              }}
              image={user ? user.avatar.thumb_url : defaultAvatar}
                />
          </Grid>

          <Grid item xs={9.3} className='col col-2'>

            <Grid 
              container 
              spacing={0} 
              flexDirection='column'
              className='grid'
            >

              <Grid item xs className='row row-1'>

                <Typography className="text name bold">
                  {name}
                </Typography>

              </Grid>
              
              <Grid item xs className='row row-2'>

                <Typography className="text chat">
                  {desc}
                </Typography>

              </Grid>

            </Grid>

          </Grid>
          
        </Grid>

      </Box>
    </Root>
  )
}