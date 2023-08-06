// eslint-disable-next-line
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import axios from "axios"

import { Box, Typography } from "@mui/material"

import { Root, Input, ImageInput, TextInput, StatusInput, StatusList, Submit } from './component'

import ChevronDownIcon from "../icons/ChevronDown.icon"
import ChevronUpIcon from "../icons/ChevronUp.icon"
import PencilIcon from "../icons/Pencil.icon"

import Loader from "../Loader"

import { statusOptions } from '../../resource/userStatus'

import { setUserSignInState } from "../../store/reducer/userSignInState"








export default function() {
    const pencilIconBtnDom = useRef(null)
    const nameInputDom = useRef(null)
    const descInputDom = useRef(null)
    const statusInputDom = useRef(null)
    const submitBtnDom = useRef(null)
    const { userSignInState } = useSelector(state => state.userSignInAuth)
    const { server } = useSelector(state => state.socketStates)
    const [avatar, setAvatar] = useState(null)
    const defaultAvatar = '/image/avatar.svg'
    const [previewAvatar, setPreviewAvatar] = useState(defaultAvatar)
    const namePlaceholder = 'Enter name'
    const [name, setName] = useState(namePlaceholder)
    const descPlaceholder = 'Enter description'
    const [desc, setDesc] = useState(descPlaceholder)
    const statusPlaceholder = 'Select a status'
    const [status, setStatus] = useState(statusPlaceholder)
    const [statusAutocomplete, setStatusAutocomplete] = useState(false)

    const [click, setClick] = useState(false)
    const [statusTogglerClick, setStatusTogglerClick] = useState(false)
    const [statusAutocompleteClick, setStatusAutocompleteClick] = useState(false)
    const [statusClick, setStatusClick] = useState(false)
    const [submitOk, setSubmitOk] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()



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
    const avatarHandler = (ev) => {
        const avatar = ev.target.files[0]
        if (avatar !== undefined) {
            const reader = new FileReader()
            reader.readAsDataURL(avatar)
            reader.onloadend = () => {
                setAvatar(reader.result)
            }
        }
    }
    const submissionValidator = () => {
        if (name === namePlaceholder || name === '') {
            setSubmitOk(false)
        } else if (desc === descPlaceholder || desc === '') {
            setSubmitOk(false)
        } else if (status === statusPlaceholder || status === '') {
            setSubmitOk(false)
        } else if (avatar === null || avatar === undefined) {
            setSubmitOk(false)
        } else {
            if (submitOk) {
                dispatch(setUserSignInState({
                    ...userSignInState, 
                    avatar,
                    name,
                    desc,
                    status
                }))
            }
            setSubmitOk(true)
        }
    }
    const submitHandler = () => {
        if (submitOk) {
            setLoading(true)

            const payload = structuredClone(userSignInState)
            axios.post(`${server}/auth/user/signup`, payload)
              .then(response => {
                const { data } = response
                if (data.msg === 'success') {
                    // Nagivate to web app home view.
                    localStorage.setItem('accessToken', data.data.token.accessToken)
                    setTimeout(() => navigate('/loader'), 1000)
                } else {
                    setLoading(false)
                    console.log('axiosResponse:', response)
                    alert('server error.')
                }
              })
              .catch(error => {
                setLoading(false)
                console.log('axiosErrorResponse:', error)
                alert('Network error')
              })
        }
    }
    const firstLetterUppercased = str => str[0].toUpperCase() + str.slice(1)


    
    useEffect(() => {
        window.onclick = function () {
          setClick(true)
        }
    })

    useEffect(() => {
        // console.log('avatar:', avatar)
        if (avatar !== null && avatar !== undefined ) {
            // const avatarPath = URL.createObjectURL(avatar)
            setPreviewAvatar(avatar)
            // console.log('avatarPath:', avatar);
        }
        submissionValidator()
    }, [avatar])
    useEffect(() => {
        if (name === namePlaceholder) {
            nameInputDom.current.classList.add('placeholder')
        } else {
            nameInputDom.current.classList.remove('placeholder')
        }
        submissionValidator()
    }, [name])
    useEffect(() => {
        if (desc === descPlaceholder) {
            descInputDom.current.classList.add('placeholder')
        } else {
            descInputDom.current.classList.remove('placeholder')
        }
        submissionValidator()
    }, [desc])
    useEffect(() => {
        if (status === statusPlaceholder) {
            statusInputDom.current.classList.add('placeholder')
        } else {
            statusInputDom.current.classList.remove('placeholder')
        }
        submissionValidator()
    }, [status])
    
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
        if (click && !statusAutocompleteClick && !statusTogglerClick) {
            setStatusAutocomplete(false)
        }

        if (statusTogglerClick) {
            setStatusAutocomplete(!statusAutocomplete)
            setStatusTogglerClick(false)
        }

        if (click) {
            setClick(false)
        }
        if (statusAutocompleteClick) {
            setStatusAutocompleteClick(false)
        }
        if (statusClick) {
            setStatusAutocomplete(false)
            setStatusClick(false)
        }

    }, [click, statusTogglerClick, statusAutocompleteClick, statusClick])
    
    useEffect(() => {
        if (!submitOk) {
            submitBtnDom.current.classList.add('disable')
        } else {
            dispatch(setUserSignInState({
                ...userSignInState, 
                avatar,
                name,
                desc,
                status
            }))

            submitBtnDom.current.classList.remove('disable')
        }
    }, [submitOk])
    
    useEffect(() => {
        // console.log('userSignInState:', userSignInState)
    }, [userSignInState])

    
    return (
        <Root>
            <ImageInput
                sx={{
                    mb: 6
                }}
            >
                <Box 
                    className="wrapper"
                >
                    <img src={previewAvatar} alt="avatar" />
                    <Box className='editButton'>
                        <Box className="wrapper">
                            <Box
                                ref={pencilIconBtnDom} 
                                className="iconButton"
                            >
                                <PencilIcon />
                            </Box>
                            <input 
                                type='file'
                                id="avatar"
                                name="avatar"
                                hidden
                                accept="image/*"
                                onChange={(e) => avatarHandler(e)} />
                            <label htmlFor="avatar" />
                        </Box>
                    </Box>
                </Box>
            </ImageInput>

            <TextInput 
                ref={nameInputDom}
                className="nameInput"
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
                </Box>
            </TextInput>
            
            <TextInput 
                ref={descInputDom}
                className="descInput"
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
                            onChange={(e) => setStatus(e.target.value)}  />
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
                    {statusOptions.map((item, i) => (
                                <Box 
                                    className={`item ${item === status.toLowerCase() ? 'active' : ''}`} 
                                    key={i}
                                    onClick={() => statusClickHandler(item)}
                                >
                                    <Typography className="text">{item}</Typography>
                                </Box>
                            )
                        )
                    }
                </StatusList>
            </StatusInput>

            <Submit 
                ref={submitBtnDom}
                onClick={submitHandler}
                sx={{
                    mt: 15,
                    mb: 8
                }}
            >
                <Typography className="label">Finish</Typography>
            </Submit>

            {loading ? <Loader 
                style={{
                    position: 'fixed',
                    margin: 0
                }}
                    /> : ''}
        </Root>
    )
}