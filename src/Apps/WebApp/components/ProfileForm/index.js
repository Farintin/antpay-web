import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import { Root, Input, ImageInput, TextInput, StatusInput, StatusList, Submit } from './component'
import ChevronDownIcon from "../icons/ChevronDown.icon"
import ChevronUpIcon from "../icons/ChevronUp.icon"
import PencilIcon from "../icons/Pencil.icon"
import { statusOptions } from '../../resource/userStatus'



export default function() {
    const pencilIconBtnDom = useRef(null)
    const nameInputDom = useRef(null)
    const descInputDom = useRef(null)
    const statusInputDom = useRef(null)
    const submitBtnDom = useRef(null)
    const [file, setFile] = useState(null)
    const defaultAvatar = '/image/avatar.svg'
    const [previewImage, setPreviewImage] = useState(defaultAvatar)
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
    const [submitOk, setSubmitOk] = useState(false)
    const navigate = useNavigate()

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
    const submissionValidator = () => {
        if (name === namePlaceholder || name === '') {
            setSubmitOk(false)
        } else if (desc === descPlaceholder || desc === '') {
            setSubmitOk(false)
        } else if (status.toLowerCase() === statusPlaceholder.toLocaleLowerCase() || status === '') {
            setSubmitOk(false)
        } else if (file === null || file === undefined) {
            setSubmitOk(false)
        } else {
            setSubmitOk(true)
        }
    }
    const submitHandler = () => {
        if (submitOk) {
            console.log('navigate to chat screen')
            navigate('/chats', { replace: true })
        }
    }
    const firstLetterUppercased = str => str[0].toUpperCase() + str.slice(1)

    
    useEffect(() => {
        window.onclick = function () {
          setClick(true)
        }

        submissionValidator()
    })

    useEffect(() => {
        console.log('file:', file);
        if (file !== null && file !== undefined ) {
            setPreviewImage(URL.createObjectURL(file))
        }
    }, [file])

    useEffect(() => {
        if (name === namePlaceholder) {
            nameInputDom.current.classList.add('placeholder')
        } else {
            nameInputDom.current.classList.remove('placeholder')
        }

        if (desc === descPlaceholder) {
            descInputDom.current.classList.add('placeholder')
        } else {
            descInputDom.current.classList.remove('placeholder')
        }
        
        if (status === statusPlaceholder) {
            statusInputDom.current.classList.add('placeholder')
        } else {
            statusInputDom.current.classList.remove('placeholder')
        }
    }, [name, desc, status])
    
    useEffect(() => {
        if (statusAutocomplete && click && !statusTogglerClick && !statusAutocompleteClick) {
            setStatusAutocomplete(false)
        }

        if (statusAutocomplete) {
            statusInputDom.current.classList.remove('collapse')
            statusInputDom.current.classList.add('expand')
        } else {
            statusInputDom.current.classList.remove('expand')
            statusInputDom.current.classList.add('collapse')
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
    }, [statusAutocomplete, click, statusTogglerClick, statusAutocompleteClick])
    
    useEffect(() => {
        if (!submitOk) {
            submitBtnDom.current.classList.add('disable')
        } else {
            submitBtnDom.current.classList.remove('disable')
        }
    }, [submitOk])

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
                    <img src={previewImage} alt="avatar" />
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
                                id="picture"
                                name="picture"
                                hidden
                                accept="image/*"
                                onChange={(e) => e.target.files[0] !== undefined ? setFile(e.target.files[0]) : ''} />
                            <label htmlFor="picture" />
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
                                    onClick={() => setStatus(firstLetterUppercased(item))}
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
                    mt: 15
                }}
            >
                <Typography className="label">Finish</Typography>
            </Submit>

        </Root>
    )
}