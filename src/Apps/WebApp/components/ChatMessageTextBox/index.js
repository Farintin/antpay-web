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
    const [roomId, setRoomId] = useState(activeRoom?._id)
    const placeholder = 'Type a message...'
    const [textValue, setTextValue] = useState('')
    const [guestPhoneNumber, setGuestPhoneNumber] = useState(null)
    const dispatch = useDispatch()





    const focusHandler = () => {
        if (textValue === placeholder) {
            setTextValue('')
        } else {
            setTextValue(roomsTextInputValue[roomId])
        }
        rootDom.current.classList.remove('placeholder')
    }
    const blurHandler = () => {
        dispatch(setRoomTextInputValue({ roomId, value: textValue }))
        if (textValue === '') {
            setTextValue(placeholder)
            rootDom.current.classList.add('placeholder')
        }
    }
    const keyDownHandler = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            if (textValue !== '') {
                isOnline ? submitHandler(e) : dispatch(setInAppOnlineError())
            }
        } else {
            if (isOnline) dispatch(setTyping(true))
        }
    }
    const formatTextValue = value => {
        if (value.length === 1) {
            value = value.toUpperCase()
        }
        return value
    }
    const changeHandler = (e) => {
        let { value } = e.target
        setTextValue(formatTextValue(value))
    }
    // const capitalize = str => str[0].toUpperCase() + str.slice(1)
    const submitHandler = () => {
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
    }



    useEffect(() => {
        if (activeRoom) {
            const roomId = activeRoom._id
            if (roomsTextInputValue[roomId] === '') {
                setTextValue(placeholder)
                rootDom.current.classList.add('placeholder')
            } else {
                setTextValue(roomsTextInputValue[roomId])
                rootDom.current.classList.remove('placeholder')
            }
            
            const guestPhoneNumber = activeRoom.usersPhoneNumber.find(phoneNumber => userData.phone.number !== phoneNumber)
            setGuestPhoneNumber(guestPhoneNumber)
            
            setRoomId(roomId)
        }
    }, [activeRoom])
    

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
                    />
        </Root>
    )
}