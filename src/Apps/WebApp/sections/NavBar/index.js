import { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { Root } from "./component"
import Avatar from "../../components/Avatar"
import Bell from '../../components/icons/Bell.icon'
import Menulist from '../../components/icons/Menulist.icon'
import Search from '../../components/icons/Search.icon'

import { setShowLogoutModal } from '../../store/reducer/user'
import { setOpenPhonebook, setOpenUserProfile } from '../../store/reducer/contacts'


export default function () {
  const menulistBtnDom = useRef(null)
  const defaultAvatar = '/image/avatar.svg'
  const { userData } = useSelector(state => state.user)
  const [avatar, setAvatar] = useState(null)
  const [menulist, setMenulist] = useState(false)
  const [click, setClick] = useState(false)
  const [menulistBtnClick, setMenulistBtnClick] = useState(false)
  const [menulistClick, setMenulistClick] = useState(false)
  const dispatch = useDispatch()


  const logOutItemClickHandler = () => {
    setMenulist(false)
    dispatch(setShowLogoutModal(true))
  }
  const menulistBtnClickHandler = () => {
    if (!menulist) setMenulistBtnClick(true)
  }
  const searchIconClickHandler = () => {
    dispatch(setOpenPhonebook(true))
  }
  const avatarClickHandler = () => {
    dispatch(setOpenUserProfile(true))
  }



  useEffect(() => {
    window.onclick = function () {
      setClick(true)
    }
  })

  useEffect(() => {
    if (userData && userData.avatar) {
      setAvatar(userData.avatar)
    }
  }, [userData])
  
  useEffect(() => {
    if (click && !menulistClick) {
      setMenulist(false)
    }

    if (click) {
      setClick(false)
    }
    if (menulistBtnClick) {
      setMenulist(true)
      setMenulistBtnClick(false)
    }
    if (menulistClick) {
      setMenulistClick(false)
    }
  }, [click, menulistBtnClick, menulistClick])

  useEffect(() => {
    if (menulist) {
      menulistBtnDom.current.classList.add('focus')
    } else {
      menulistBtnDom.current.classList.remove('focus')
    }
  }, [menulist])



  return (
    <Root>
      <Box className="wrapper">

        <Grid container spacing={0} className='grid'>
          <Grid item xs={6} className='col col-1'>

            <Stack direction="row" spacing={0} className='stack'>

              <Box 
                ref={menulistBtnDom}
                className="iconButton"
                onClick={menulistBtnClickHandler}
              >
                <Menulist
                  style={{
                    width: 6.6
                  }}
                    />

                <Box 
                  className="dropdown"
                  onClick={() => setMenulistClick(true)}
                >
                  <Box className='item ui-ignore'>
                    <Typography className='label'>new groups</Typography>
                  </Box>
                  <Box className='item ui-ignore'>
                    <Typography className='label'>starred messages</Typography>
                  </Box>
                  <Box className='item ui-ignore'>
                    <Typography className='label'>select chats</Typography>
                  </Box>
                  <Box className='item ui-ignore'>
                    <Typography className='label'>settings</Typography>
                  </Box>
                  <Box 
                    className='item'
                    onClick={logOutItemClickHandler}
                  >
                    <Typography className='label'>logout</Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="iconButton"
                onClick={searchIconClickHandler}
              >
                <Search/>
              </Box>

              <Box className="iconButton ui-ignore">
                <Bell/>
              </Box>

            </Stack>

          </Grid>

          <Grid item xs={6} className='col col-2'>

            <Avatar 
              image={avatar ? avatar.thumb_url : defaultAvatar}
              style={{
                marginLeft: 'auto',
                cursor: 'pointer'
              }} 
              onClick={avatarClickHandler}
                />

          </Grid>

        </Grid>

      </Box>
    </Root>
  )
}