import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux"

import randomstring from 'randomstring'

import { Root, Input } from './component'

import { setNewMessage } from '../../store/reducer/socketStates'
import { setInAppOnlineError } from '../../store/reducer/contacts'
import { setRoomTextInputValue, setTyping } from '../../store/reducer/roomsStates'





export default function({ style }) {
    const { userData } = useSelector(state => state.user)
    const { isOnline } = useSelector(state => state.socketStates)
    const { activeRoom, roomsTextInputValue } = useSelector(state => state.roomsStates)
    const rootDom = useRef(null)
    const [roomId, setRoomId] = useState(null)
    const placeholder = 'Type a message...'
    const [textValue, setTextValue] = useState('')
    const [focus, setFocus] = useState(false)
    const [changeCount, setChangeCount] = useState(0)
    const [guestPhoneNumber, setGuestPhoneNumber] = useState(null)
    const dispatch = useDispatch()
    let pingTypingFalseTimeoutId = 0


    const focusHandler = () => {
        setFocus(true)
        if (roomId) {
            if (textValue === placeholder) {
                setTextValue('')
            }
        }
    }
    const blurHandler = () => {
        setFocus(false)
        if (roomId) {
            setChangeCount(0)
        }
    }
    const keyDownHandler = (e) => {
        if (roomId) {
            if (e.keyCode === 13) {
                e.preventDefault()
                if (textValue !== placeholder && textValue !== '') {
                    isOnline ? submitHandler(e) : dispatch(setInAppOnlineError())
                }
            } else {
                if (isOnline) dispatch(setTyping(true))
            }
        }
    }
    const keyUpHandler = () => {
        if (roomId) {
            clearTimeout(pingTypingFalseTimeoutId)
            pingTypingFalseTimeoutId = setTimeout(() => {
                dispatch(setTyping(false))
            }, 3000)
        }
    }
    const changeHandler = (e) => {
        let { value } = e.target
        setChangeCount(changeCount + 1)
        setTextValue(formatTextValue(value))
    }
    const formatTextValue = value => {
        if (value.length > 0) {
            value = capitalize(value)
        }
        return value
    }
    const capitalize = str => str[0].toUpperCase() + str.slice(1)
    const submitHandler = (e) => {
        if (roomId) {
            const time = `${new Date(Date.now())}`
            const sid = randomstring.generate({
                length: 8,
                charset: 'alphanumeric'
            })
            const message = {
                sid,
                roomId: roomId,
                author: userData.phone.number,
                reader: guestPhoneNumber,
                text: textValue,
                time: time,
                reciept: 0
            }
            dispatch(setNewMessage(message))
            setTextValue('')
            e.target.blur()
        }
    }



    useEffect(() => {
        if (activeRoom) {
            setRoomId(activeRoom._id)
        }
    }, [activeRoom])

    useEffect(() => {
        if (roomId) {
            if (roomsTextInputValue[roomId] === '') {
                setTextValue(placeholder)
            } else {
                setTextValue(roomsTextInputValue[roomId])
            }

            const guestPhoneNumber = activeRoom.usersPhoneNumber.find(phoneNumber => userData.phone.number !== phoneNumber)
            setGuestPhoneNumber(guestPhoneNumber)
        }
    }, [roomId])
    
    useEffect(() => {
        if (roomId) {
            if (!focus) {
                if (textValue === '') {
                    setTextValue(placeholder)
                } else {
                    dispatch(setRoomTextInputValue({ roomId, value: textValue }))
                }
            }
        }
    }, [focus])

    useEffect(() => {
        if (roomId) {
            if (changeCount === 0) {
                if (textValue === placeholder) {
                    rootDom.current.classList.add('placeholder')
                } else {
                    rootDom.current.classList.remove('placeholder')
                }
            }
        }
    }, [textValue])

    useEffect(() => {
        if (roomId) {
            if (roomsTextInputValue[roomId] === '') {
                setTextValue(placeholder)
            } else {
                setTextValue(roomsTextInputValue[roomId])
            }
        }
    }, [roomsTextInputValue])

    return (
        <Root
            ref={rootDom}
            style={style}
        >
            <Input
                type="text" 
                multiline={true}
                id="chatMessage"
                name="chatMessage"
                value={textValue}
                onFocus={focusHandler}
                onBlur={blurHandler}
                onChange={changeHandler}
                onKeyDown={keyDownHandler}
                onKeyUp={keyUpHandler}
                    />
        </Root>
    )
}