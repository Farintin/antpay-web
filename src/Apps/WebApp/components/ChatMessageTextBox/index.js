import { useEffect, useState, useRef } from 'react'
import { Root, Input } from './component'





export default function(props) {
    const rootDom = useRef(null)
    const placeholder = 'Type a message...'
    const [message, setMessage] = useState(placeholder)
    const [submitOk, setSubmitOk] = useState(false)
    const [focus, setFocus] = useState(false)
    const [className, setClassName] = useState('')
    const [minH, setMinH] = useState(0)

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
            console.log(minH, h, 'at change add multiline');
            setClassName('multiline')
        } else {
            console.log(minH, h, 'at change remove multiline');
            setClassName('')
        }
    }
    const submitHandler = () => {
        // Socket.io
        console.log('submit');
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
            style={props.style}
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