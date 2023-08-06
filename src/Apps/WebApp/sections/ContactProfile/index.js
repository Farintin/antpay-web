import { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"

import { Root, StyledButton } from "./component"

import ContactProfileAvatar from "../../components/ContactProfileAvatar"

import ForwardArrowIcon from '../../components/icons/ForwardArrow.icon'
import PhoneSolidIcon from '../../components/icons/PhoneSolid.icon'
import VideoCamSolidIcon from '../../components/icons/VideoCamSolid.icon'
import CameraSolidIcon from '../../components/icons/CameraSolid.icon'
import FileIcon from '../../components/icons/File.icon'
import SearchIcon from '../../components/icons/Search.icon'

import { 
  setShowRoomGuestContactProfile, 
  setInAppMessage, 
  setInAppError, 
  setInAppOnlineError, 
  setContacts } from '../../store/reducer/contacts'

import { countries } from '../../resource/country'





export default function () {
  const accessToken = localStorage.getItem('accessToken')
  const defaultAvatar = '/image/avatar.svg'
  const addContactModalDom = useRef(null)
  const { userData } = useSelector(state => state.user)
  const { isOnline, server } = useSelector(state => state.socketStates)
  const { contacts } = useSelector(state => state.contacts)
  const { activeRoom } = useSelector(state => state.roomsStates)
  const [roomId, setRoomId] = useState(null)
  const [avatar, setAvatar] = useState(defaultAvatar)
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showAddContactBtn, setShowAddContactBtn] = useState(false)
  const [openAddContactModal, setOpenAddContactModal] = useState(false)
  const [click, setClick] = useState(false)
  const [openContactModalBtnClick, setOpenContactModalBtnClick] = useState(false)
  const [addContactModalClick, setAddContactModalClick] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()


  const extractCountryCode = ({ phoneNumber }) => {
    let countryCode = ''
    let countryName = ''
    for (let country of countries) {
      countryCode = country.code
      countryName = country.name
      if (phoneNumber.includes(countryCode)) {
        break
      }
    }
    return { countryCode, countryName }
  }
  const fetchPhonebook = () => {
    axios.get(`${server}/users/user/phonebook`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        const { data } = response
        if (data.msg === 'ok') {
          const phonebook = data.data
          dispatch(setContacts(phonebook.contacts))
        } else {
          console.log('phonebookResponse:', response)
        }
      })
      .catch(error => {
        console.log('phonebookErrorResponse:', error)
      })
  }
  const showContactProfileHandler = () => {
    dispatch(setShowRoomGuestContactProfile(false))
  }
  const setDataHandler = () => {
    const { contact } = activeRoom

    if (contact && contact.userAccExist) {
      setName(contact.user.name)
      setAvatar(contact.user.avatar.url)
      setShowAddContactBtn(false)
    }
    if (contact && !contact.userAccExist) {
      setName(contact.phone.number)
      setAvatar(defaultAvatar)
      setShowAddContactBtn(false)
    }
    if (!contact) {
      setName('')
      setAvatar(defaultAvatar)
      setShowAddContactBtn(true)
    }
    
    let phoneNumber = activeRoom.usersPhoneNumber.find(phoneNumber => userData.phone.number !== phoneNumber)
    const { countryCode } = extractCountryCode({ phoneNumber })
    const phoneNumberWithOutCountryCode = phoneNumber.replace(countryCode, '')
    const phoneFormat = `${countryCode} ${phoneNumberWithOutCountryCode.slice(0,3)} ${phoneNumberWithOutCountryCode.slice(3,6)} ${phoneNumberWithOutCountryCode.slice(6)}`
    setPhoneNumber(phoneFormat)
  }
  const openAddContactModalHandler = () => {
    setOpenAddContactModal(true)
  }
  const closeAddContactModalHandler = () => {
    setOpenAddContactModal(false)
  }
  const addContactModalClickHandler = () => {
    setAddContactModalClick(true)
  }
  const openAddContactModalBtnClickHandler = () => {
    openAddContactModalHandler()
    setOpenContactModalBtnClick(true)
  }
  const addContactHandler = () => {
    if (isOnline) {
      setLoading(true)
      closeAddContactModalHandler()

      let phoneNumber = activeRoom.usersPhoneNumber.find(phoneNumber => userData.phone.number !== phoneNumber)
      const { countryCode, countryName } = extractCountryCode({ phoneNumber })

      const phone = {
        phone: {
          countryName,
          countryCode,
          number: phoneNumber
        }
      }

      const existingContact = contacts.find(contact => contact.phone.number === phone.phone.number)
      if (existingContact) {
        setLoading(false)
        dispatch(setInAppError('Contact already exist in your contacts.'))
      } else {
        axios.put(`${server}/users/user/addContacts`, [
            phone
          ],
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
          .then(response => {
            setLoading(false)
            if (response.data.msg === 'success') {
                fetchPhonebook()
                dispatch(setInAppMessage('Contact phonenumber successfully added to contacts.'))
            } else {
                dispatch(setInAppError('Server error.'))
                console.log('addContacts axiosResponse:', response)
            }
          })
          .catch(error => {
            setLoading(false)
            dispatch(setInAppError('Network error.'))
            console.log('addContacts axiosErrorResponse:', error)
          })
      }
    } else {
      dispatch(setInAppOnlineError())
    }
  }


  useEffect(() => {
    if (activeRoom) {
      window.onclick = function () {
        setClick(true)
      }

      setDataHandler()
      setRoomId(activeRoom._id)
    }
  }, [])
  
  useEffect(() => {
    if (activeRoom && roomId) {
      if (activeRoom._id === roomId) {
        setDataHandler()
      }
    }
  }, [activeRoom])
  
  useEffect(() => {
    if (openAddContactModal && click && !openContactModalBtnClick && !addContactModalClick) {
      setOpenAddContactModal(false)
    }
    
    if (click) {
      setClick(false)
    }
    if (openContactModalBtnClick) {
        setOpenContactModalBtnClick(false)
    }
    if (addContactModalClick) {
        setAddContactModalClick(false)
    }
  }, [openAddContactModal, click, openContactModalBtnClick, addContactModalClick])
  

  return (
    <Root>
      <Grid container spacing={0} direction="column" className='grid-stack'>

        <Grid item className='row row-1'>
          
          <Stack 
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            className='nav'
          >
            
            <Box 
              className="iconButton"
              onClick={showContactProfileHandler}
            >
              <ForwardArrowIcon
                style={{
                  marginLeft: 2
                }}
                  />
            </Box>
            
            {showAddContactBtn ? 
              <Typography 
                className="textButton"
                onClick={openAddContactModalBtnClickHandler}
              >
                +add
              </Typography> :
              <Typography 
                className="textButton ui-ignore"
              >
                edit
            </Typography>}
            
          </Stack>

        </Grid>

        <Grid item className='row row-2'>
          <Box className="wrapper">

            <ContactProfileAvatar 
              style={{
                width: 195,
                height: 195,
                marginBottom: 23
              }}
              image={avatar}
                />
            
            <Typography className="text username">
              {name}
            </Typography>
            <Typography className="text phoneNumber">
              {phoneNumber}
            </Typography>
            <Box className="iconButtons">

              <Box 
                className="iconButton ui-ignore"
              >
                <PhoneSolidIcon
                  color='#fff'
                    />
              </Box>

              <Box 
                className="iconButton ui-ignore"
              >
                <VideoCamSolidIcon
                  color='#fff'
                    />
              </Box>
              
              <Box 
                className="iconButton ui-ignore"
              >
                <CameraSolidIcon
                  color='#fff'
                    />
              </Box>

              <Box 
                className="iconButton ui-ignore"
              >
                <FileIcon
                  color='#fff'
                    />
              </Box>
              
              <Box 
                className="iconButton ui-ignore"
              >
                <SearchIcon
                  color='#fff'
                    />
              </Box>

            </Box>

          </Box>
        </Grid>

        <Grid item className='row row-3'>
          <Box className="wrapper">

            <Box className='listMenu ui-ignore'>

              <Box className='listItem'>
                <Box className='wrapper'>
                  <Typography className="label">shared files</Typography>
                  <ForwardArrowIcon />
                </Box>
              </Box>
              <Box className='listItem'>
                <Box className='wrapper'>
                  <Typography className="label">share Contact</Typography>
                  <ForwardArrowIcon />
                </Box>
              </Box>

            </Box>

          </Box>
        </Grid>

      </Grid>

      {openAddContactModal ? 
        <Box 
          ref={addContactModalDom}
          className='addContactModal'
          onClick={addContactModalClickHandler}
        >
          <Typography className="text">Add phonenumber to contacts.</Typography>
          <Box className='buttons'>
            <StyledButton
              className="button"
              onClick={addContactHandler}
            >
              <Typography className="label">
                Yes
              </Typography>
            </StyledButton>

            <StyledButton
              className="button"
              onClick={closeAddContactModalHandler}
            >
              <Typography className="label">
                No
              </Typography>
            </StyledButton>
          </Box>
        </Box> : ''}

      {loading ? 
        <Box className="loadingModal">
          <ClipLoader 
            color="#36d7b7"
            loading
            size={60}
            speedMultiplier={1.2}
            aria-label="Loading Spinner"
            data-testid="loader" />
        </Box> : ''}
    </Root>
  )
}