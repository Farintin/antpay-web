// eslint-disable-next-line
import { useState, useEffect, useRef } from "react"
// eslint-disable-next-line
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"

import UserProfileAvatar from "../../components/UserProfileAvatar"
// eslint-disable-next-line
import { Root, Input, TextInput, StatusInput, StatusList } from "./component"

import BackArrowIcon from '../../components/icons/BackArrow.icon'
import ChevronDownIcon from "../../components/icons/ChevronDown.icon"
import ChevronUpIcon from "../../components/icons/ChevronUp.icon"
import PencilIcon from "../../components/icons/Pencil.icon"

import { setUserData } from '../../store/reducer/user'
import { setOpenEditUserProfile, setInAppMessage, setInAppError, setInAppOnlineError } from "../../store/reducer/contacts"

import { statusOptions } from '../../resource/userStatus'





export default function (props) {
  const accessToken = localStorage.getItem('accessToken')
  const nameInputDom = useRef(null)
  const phoneNumberInputDom = useRef(null)
  const descInputDom = useRef(null)
  const statusInputDom = useRef(null)
  const { userData } = useSelector(state => state.user)
  const { isOnline, server } = useSelector(state => state.socketStates)
  const defaultAvatar = '/image/avatar.svg'
  const [avatar, setAvatar] = useState(defaultAvatar)
  const namePlaceholder = 'Enter name'
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const descPlaceholder = 'Enter description'
  const [desc, setDesc] = useState('')
  const statusPlaceholder = 'Select a status'
  const [status, setStatus] = useState('')
  const [statusAutocomplete, setStatusAutocomplete] = useState(false)
  const [click, setClick] = useState(false)
  const [statusTogglerClick, setStatusTogglerClick] = useState(false)
  const [statusAutocompleteClick, setStatusAutocompleteClick] = useState(false)
  const [statusClick, setStatusClick] = useState(false)
  const [updateData, setUpdateData] = useState({})
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()


  const setDataHandler = () => {
    setAvatar(userData.avatar.url)
    setName(userData.name)
    setPhoneNumber(userData.phone.number)
    setDesc(userData.desc)
    setStatus(userData.status)
  }

  const nameFocusHandler = (e) => {
    const value = e.target.value.trim()
    if (value === namePlaceholder) {
        setName('')
    }
  }
  const nameBlurHandler = (e) => {
      const value = e.target.value.trim()
      if (value === '') {
          setName(namePlaceholder)
      }
  }
  const descFocusHandler = (e) => {
      const value = e.target.value.trim()
      if (value === descPlaceholder) {
          setDesc('')
      }
  }
  const descBlurHandler = (e) => {
      const value = e.target.value.trim()
      if (value === '') {
          setDesc(descPlaceholder)
      }
  }
  const statusToggler = () => {
    setStatusAutocomplete(!statusAutocomplete)
    setStatusTogglerClick(true)
  }
  const statusFocusHandler = (e) => {
      const value = e.target.value.trim()
      if (value === statusPlaceholder) {
          setStatus('')
      }
  }
  const statusBlurHandler = (e) => {
      const value = e.target.value.trim()
      if (value === '') {
          setStatus(statusPlaceholder)
      }
  }
  const statusHandler = (item) => {
    setStatus(firstLetterUppercased(item))
  }
  const statusClickHandler = (item) => {
    setStatusClick(true)
    statusHandler(item)
  }
  const firstLetterUppercased = str => (str[0].toUpperCase() + str.slice(1))
  const saveHandler = () => {
    if (isOnline) {
      if (Object.keys(updateData).length > 0) {
        setLoading(true)
        axios.put(`${server}/users/user/update`, {
            data: updateData
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
          .then(response => {
            if (response.data.msg === 'success') {
              const { data } = response
              const userData = data.data
              dispatch(setOpenEditUserProfile(false))
              dispatch(setUserData(userData))
              dispatch(setInAppMessage('Udpate successful.'))
            } else {
              setLoading(false)
              dispatch(setInAppError('SorryServer error.'))
              console.log('update user profile data axiosResponse:', response)
            }
          })
          .catch(error => {
            setLoading(false)
            dispatch(setInAppError('Network error.'))
            console.log('update user profile data axiosErrorResponse:', error)
          })
      }
    } else {
      dispatch(setInAppOnlineError())
    }
  }


  useEffect(() => {
    window.onclick = function () {
      setClick(true)
    }
  }, [])

  useEffect(() => {
    if (userData) {
      setDataHandler()
    }
  }, [userData])
  
  useEffect(() => {
    if (name === namePlaceholder) {
        nameInputDom.current.classList.add('placeholder')
    } else {
        nameInputDom.current.classList.remove('placeholder')
    }
  }, [name])
  useEffect(() => {
    if (desc === descPlaceholder) {
        descInputDom.current.classList.add('placeholder')
    } else {
        descInputDom.current.classList.remove('placeholder')
    }
  }, [desc])
  useEffect(() => {
    if (status === statusPlaceholder) {
        statusInputDom.current.classList.add('placeholder')
    } else {
        statusInputDom.current.classList.remove('placeholder')
    }
  }, [status])
  
  useEffect(() => {
    let updateData = {}
    
    if (avatar === null || avatar === undefined || avatar === defaultAvatar || avatar === userData.avatar.url) {
      delete updateData.avatar
    } else {
      updateData = { ...updateData, avatar }
    }
    
    if (name === userData.name) {
      delete updateData.name
    } else if (name === namePlaceholder) {
      updateData.name = ''
    } else {
      updateData = { ...updateData, name }
    }
    
    if (desc === userData.desc) {
      delete updateData.desc
    } else if (desc === descPlaceholder) {
      updateData.desc = ''
    } else {
      updateData = { ...updateData, desc }
    }
    
    if (status === userData.status) {
      delete updateData.status
    } else if (status === statusPlaceholder) {
      updateData.status = ''
    } else {
      updateData = { ...updateData, status }
    }

    // console.log({ updateData });
    setUpdateData(updateData)
  }, [avatar, name, desc, status])
  
  
  useEffect(() => {
    if (statusAutocomplete) {
      statusInputDom.current.classList.remove('collapse')
      statusInputDom.current.classList.add('expand')
    } else {
      statusInputDom.current.classList.remove('expand')
      statusInputDom.current.classList.add('collapse')
    }
  }, [statusAutocomplete])

  useEffect(() => {
    if (statusAutocomplete && click && !statusTogglerClick && !statusAutocompleteClick) {
      setStatusAutocomplete(false)
    }

    if (statusClick) {
      setStatusAutocomplete(false)
      setStatusClick(false)
    }

    if (click) {
      setClick(false)
    }
    if (statusTogglerClick) {
      setStatusTogglerClick(false)
    }
    if (statusAutocompleteClick) {
      setStatusAutocompleteClick(false)
    }
  }, [click, statusTogglerClick, statusAutocompleteClick, statusClick])

  return (
    <Root
      style={props.style}
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
                onClick={() => dispatch(setOpenEditUserProfile(false))}
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
                edit profile
              </Typography> 
            </Grid>

            <Grid item xs={3} className='col col-3'>
              <Typography 
                onClick={saveHandler}
                className="text textButton"
              >
                save
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
              disable={false}
              setImageHandler={setAvatar}
                />
            
            <TextInput 
              ref={nameInputDom}
              style={{ marginTop: 18 }}
            >
              <Box className="wrapper">
                <Input 
                  type="text" 
                  id="name"
                  name="name"
                  value={name}
                  onFocus={nameFocusHandler}
                  onBlur={nameBlurHandler}
                  onChange={(e) => setName(e.target.value)} />
                <PencilIcon/>
              </Box>
            </TextInput>
            
            <TextInput 
              ref={phoneNumberInputDom}
            >
              <Box className="wrapper">
                <Input 
                  disabled
                  type="text" 
                  id="name"
                  name="name"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)} />
              </Box>
            </TextInput>
            
            <TextInput 
                ref={descInputDom}
            >
              <Box className="wrapper">
                <Input 
                  type="text" 
                  id="desc"
                  name="desc"
                  value={desc}
                  onFocus={descFocusHandler}
                  onBlur={descBlurHandler}
                  onChange={(e) => setDesc(e.target.value)} />  
                <PencilIcon/>
              </Box>
            </TextInput>

            <StatusInput 
              ref={statusInputDom}
              className="collapse"
            >
              <Box className="wrapper">
                <Box className="box input">
                  <Input 
                    value={status}
                    onFocus={statusFocusHandler}
                    onBlur={statusBlurHandler}
                    onChange={(e) => setStatus(e.target.value)} />
                </Box>
                <Box 
                  className="box dropdownBtn"
                  onClick={statusToggler}
                >
                  <ChevronDownIcon/>
                  <ChevronUpIcon/>
                </Box>
              </Box>
              <StatusList 
                className="list"
                onClick={() => setStatusAutocompleteClick(true)}
              >
                <Box className='wrapper'>
                  {statusOptions.map((item, i) => (
                      <Box 
                        className={`item ${item === status.toLowerCase() ? 'active' : ''}`} 
                        key={i}
                        onClick={() => statusClickHandler(item)}
                      >
                        <Typography className="text">{item}</Typography>
                      </Box>
                    )
                  )}
                </Box>
              </StatusList>
            </StatusInput>

          </Box>
        </Grid>

      </Grid>
      
      {loading ? 
        <Box className="loadingModal">
          <ClipLoader 
            color="#36d7b7"
            loading
            size={72}
            speedMultiplier={1.2}
            aria-label="Loading Spinner"
            data-testid="loader" />
        </Box> : ''}
    </Root>
  )
}