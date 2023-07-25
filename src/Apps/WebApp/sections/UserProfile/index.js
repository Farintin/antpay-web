import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import UserProfileAvatar from "../../components/UserProfileAvatar"

import { Root } from "./component"

import BackArrowIcon from '../../components/icons/BackArrow.icon'
import ForwardArrowIcon from '../../components/icons/ForwardArrow.icon'
import { setOpenUserProfile, setOpenEditUserProfile } from "../../store/reducer/contacts"





export default function (props) {
  const { userData } = useSelector(state => state.user)
  const { openUserProfile } = useSelector(state => state.contacts)
  const defaultAvatar = '/image/avatar.svg'
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [avatar, setAvatar] = useState(defaultAvatar)
  const dispatch = useDispatch()


  const openEditUserProfileHandler = () => {
    dispatch(setOpenEditUserProfile(true))
  }

  const setDataHandler = () => {
    setName(userData.name)
    setAvatar(userData.avatar.url)
    setDesc(userData.desc)
  }

  useEffect(() => {
    if (userData) {
      setDataHandler()
    }
  }, [userData])

  return (
    <Root
      style={props.style}
      className={`${openUserProfile ? 'open' : ''}`}
    >
      <Grid className='grid-stack'>
        <Grid item className='row row-1'>
          
          <Grid 
            container
            spacing={0}
            className='grid'
          >
            <Grid item xs={3} className='col col-1'>
              <Box 
                className="iconButton"
                onClick={() => dispatch(setOpenUserProfile(false))}
              >
                <BackArrowIcon
                  color='#6E01CE'
                  style={{
                    marginRight: 2
                  }}
                    />
              </Box>
            </Grid>
            <Grid item xs className='col col-2'>
              <Typography 
                className="text heading"
              >
                your profile
              </Typography> 
            </Grid>
            <Grid item xs={3} className='col col-3'>
              <Typography 
                className="text textButton"
                onClick={openEditUserProfileHandler}
              >
                edit
              </Typography> 
            </Grid>
          </Grid>

        </Grid>

        <Grid item className='row row-2'>
          <Box className="wrapper">

            <UserProfileAvatar 
              style={{
                width: 165,
                height: 165,
                marginTop: 18,
                marginBottom: 18
              }}
              image={avatar}
              disable
                />
            <Typography className="text username">
              {name}
            </Typography>
            <Typography className="text status">
              {desc}
            </Typography>

          </Box>
        </Grid>

        <Grid item  className='row row-3'>
          <Box className="wrapper">

            <Box className='listMenu ui-ignore'>

              <Box className='listItem'>
                <Typography className="label">account</Typography>
                <ForwardArrowIcon />
              </Box>
              <Box className='listItem'>
                <Typography className="label">chats</Typography>
                <ForwardArrowIcon />
              </Box>
              <Box className='listItem'>
                <Typography className="label">notifications</Typography>
                <ForwardArrowIcon />
              </Box>
              <Box className='listItem'>
                <Typography className="label">help</Typography>
                <ForwardArrowIcon />
              </Box>
              <Box className='listItem'>
                <Typography className="label">invite friends</Typography>
                <ForwardArrowIcon />
              </Box>

            </Box>

          </Box>
        </Grid>

      </Grid>
    </Root>
  )
}