import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux"

import randomstring from 'randomstring'

import { Root, Input } from './component'

import { setRecentRoomMessages } from '../../store/reducer/socketStates'

import { socket } from '../../socket'





export default function({ style }) {
    const { activeRoom } = useSelector(state => state.socketStates)
    const rootDom = useRef(null)
    const placeholder = 'Type a message...'
    const [message, setMessage] = useState(placeholder)
    const [submitOk, setSubmitOk] = useState(false)
    const [focus, setFocus] = useState(false)
    const [className, setClassName] = useState('')
    const [minH, setMinH] = useState(0)
    const dispatch = useDispatch()

    const focusHandler = (e) => {
        setFocus(true)
        const value = e.target.value.trim()
        if (value === placeholder) {
            setMessage('')
        }
    }
    const blurHandler = (e) => {
        setFocus(false)
        const value = e.target.value.trim()
        if (value === '') {
            setMessage(placeholder)
        }
    }
    const keyDownHandler = (e) => {
        if (submitOk && e.keyCode === 13) {
            e.preventDefault()
            submitHandler()
        }
    }
    const formatMessage = e => {
        const value = e.target.value.length > 0 ? capitalize(e.target.value) : ''
        return value
    }
    const capitalize = str => str[0].toUpperCase() + str.slice(1)
    const submitValidation = () => {
        if (message === placeholder || message === '') {
            setSubmitOk(false)
        } else {
            if (!submitOk) {
                setSubmitOk(true)
            }
        }
    }
    const multilineHandler = (h) => {
        if (minH > 0 && h > minH) {
            // console.log(minH, h, 'at change add multiline');
            setClassName('multiline')
        } else {
            // console.log(minH, h, 'at change remove multiline');
            setClassName('')
        }
    }
    const submitHandler = () => {
        // Socket.io
        if (activeRoom) {
            console.log('sent message');
            // console.log('room is:', activeRoom, '@"if');
            const time = `${new Date(Date.now())}`
            const id = randomstring.generate({
                length: 8,
                charset: 'alphanumeric'
            })
            const sid = `${time}--${id}`

            const roomMsg = {
                roomType: activeRoom.roomType,
                usersPhoneNumber: [activeRoom.guest.phone.number, activeRoom.host.phone.number],
                message: {
                    sid,
                    author: activeRoom.host.phone.number,
                    reader: activeRoom.guest.phone.number,
                    text: message,
                    time: time,
                    reciept: 0
                }
            }

            dispatch(setRecentRoomMessages(roomMsg))
            socket.emit('send-message', roomMsg)
            setMessage('')
        } else {
            console.log('room is:', activeRoom, '@else');
        }
    }



    useEffect(() => {
        const h = rootDom.current.querySelector('.MuiInputBase-input').clientHeight
        if (focus) {
            if (message === placeholder || message === '') {
                setMinH(h)
            } else {
                multilineHandler(h)
            }
        } else {
            if (message === placeholder || message === '') {
                setMinH(h)
            } else {
                multilineHandler(h)
            }
        }
    })

    useEffect(() => {
        if (message === placeholder) {
            rootDom.current.classList.add('placeholder')
        } else {
            rootDom.current.classList.remove('placeholder')
        }
        submitValidation()
    }, [message])

    return (
        <Root
            ref={rootDom}
            style={style}
            className={className}
        >
            <Input
                type="text" 
                multiline={true}
                id="chatMessage"
                name="chatMessage"
                value={message}
                onFocus={focusHandler}
                onBlur={blurHandler}
                onChange={(e) => setMessage(formatMessage(e))}
                onKeyDown={keyDownHandler}
                    />
        </Root>
    )
}