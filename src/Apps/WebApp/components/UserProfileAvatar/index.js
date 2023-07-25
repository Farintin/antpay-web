import { useRef, useState, useEffect } from 'react'

import { Box } from "@mui/material"

import { Root } from "./component"

import PencilIcon from "../icons/Pencil.icon"



export default function({ style, image, disable, setImageHandler }) {
    const pencilIconBtnDom = useRef(null)
    const [avatar, setAvatar] = useState(null)
    const [previewAvatar, setPreviewAvatar] = useState(image)


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
    

    useEffect(() => {
        if (avatar !== null && avatar !== undefined ) {
            setPreviewAvatar(avatar)
            setImageHandler(avatar)
        }
    }, [avatar])
    
    useEffect(() => {
        setPreviewAvatar(image)
    }, [image])

    return (
        <Root
            style={style}
        >
            <Box 
                className="wrapper"
            >
                <img src={previewAvatar} alt="avatar" />
                {!disable ? 
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
                                onChange={(e) => avatarHandler(e)} 
                                    />
                            <label htmlFor="avatar" />
                        </Box>
                    </Box> : ''}
            </Box>
        </Root>
    )
}