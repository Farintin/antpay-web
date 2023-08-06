import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import axios from "axios"

import { Box, Typography } from "@mui/material"

import { Root, OTPInput, Submit } from './component'
import Loader from "../Loader"





export default function({ devOtp }) {
    const displayDom = useRef(null)
    const inputValueDom = useRef(null)
    const submitBtnDom = useRef(null)
    const { userSignInState } = useSelector(state => state.userSignInAuth)
    const { server } = useSelector(state => state.socketStates)
    const validOtpLength = 4
    let displayValue = []
    for (let i=0; i<validOtpLength; i++) {displayValue.push('')}
    const defaultOTP = ''
    const [otp, setOtp] = useState(defaultOTP)
    const [boxFocus, setBoxFocus] = useState(false)
    const [submitOk, setSubmitOk] = useState(false)
    const [submitCount, setSubmitCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    


    const clickHandler = (i) => {
        setBoxFocus(i+1)
    }
    const inputFocusHandler = () => {
        setBoxFocus(true)
    }
    const inputBlurHandler = () => {
        setBoxFocus(false)
    }
    const valueKeyUpHandler = () => {
        inputValueDom.current.selectionStart === 0 ? setBoxFocus(1) : setBoxFocus(inputValueDom.current.selectionStart)
    }
    const valueChangeHandler = (e) => {
        const { value } = e.target
        let error = false
        for (let char of value.split('')) {
            if (!'1234567890'.includes(char)) {
                error = true
                break
            }
        }
        submissionValidator(value)
        !error ? setOtp(value) : ''
    }
    const submissionValidator = (value) => {
        if (value.length === validOtpLength) {
            // console.log('submitOk true');
            setSubmitOk(true)
        } else {
            // console.log('submitOk false');
            setSubmitOk(false)
        }
    }
    const submitHandler = () => {
        if (submitOk) {
            console.log({ submitCount });
            setLoading(true)

            axios.post(`${server}/auth/user/verifyOtp`, {
                passcode: otp,
                phone: userSignInState.phone
              })
              .then(response => {
                setSubmitCount(submitCount + 1)
                const { data } = response
                if (data.msg === 'success') {
                    if (data.validOtp) {
                        if (data.userExist) {
                            localStorage.setItem('accessToken', data.data.token.accessToken)
                            setTimeout(() => navigate('/loader'), 1000)
                        } else {
                            setTimeout(() => navigate('/setProfile'), 1000)
                        }
                    } else {
                        setLoading(false)
                        console.log('wrong otp')
                        setOtp('')
                        if (submitCount < 3) {
                            alert(`Invalid OTP`)
                            alert(`correct OTP: ${devOtp}`)
                        } else {
                            alert(`Reached maximum submit.`)
                        }
                    }
                } else {
                    setLoading(false)
                    console.log('unsuccessful:', data)
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



    useEffect(() => {
        setBoxFocus(1)
    }, [])

    useEffect(() => {
        if (boxFocus !== true && boxFocus !== false) {
            inputValueDom.current.focus()
            inputValueDom.current.selectionStart = boxFocus
            inputValueDom.current.selectionEnd = boxFocus
            displayDom.current.querySelectorAll('.box .caret').forEach(element => {
                if (boxFocus === Number(element.getAttribute('index')) + 1) {
                    element.classList.remove('hide')
                } else {
                    element.classList.add('hide')
                }
            })
            setBoxFocus(true)
        } else if (boxFocus === false) {
            displayDom.current.querySelectorAll('.box .caret').forEach(element => {
                element.classList.add('hide')
            })
        }
    }, [boxFocus])

    useEffect(() => {
        if (!submitOk) {
            submitBtnDom.current.classList.add('disable')
        } else {
            submitBtnDom.current.classList.remove('disable')
        }
    }, [submitOk])
    
    useEffect(() => {
        if (submitCount > 3) {
            navigate('/phoneSignIn')
        }
    }, [submitCount])
    

    return (
        <Root>

            <OTPInput>
                <Box 
                    ref={displayDom} 
                    className='display'
                >
                    {
                        displayValue.map((v, i) => (
                                <Box 
                                    key={i} 
                                    className='box'
                                    onClick={() => clickHandler(i)}
                                >
                                    <Typography
                                        className="text"
                                    >
                                        {
                                            otp[i] !== undefined ? otp[i] : ''
                                        }
                                    </Typography>
                                    <Box 
                                        index={i}
                                        className={`caret hide`} />
                                </Box>
                            )
                        )
                    }
                </Box>
                <input 
                    ref={inputValueDom}
                    type='text' 
                    id="otpValue"
                    name="otpValue"
                    maxLength={validOtpLength}
                    value={otp}
                    onFocus={inputFocusHandler}
                    onBlur={inputBlurHandler}
                    onChange={valueChangeHandler}
                    onKeyUp={valueKeyUpHandler} />
            </OTPInput>

            <Submit
                ref={submitBtnDom}
                onClick={submitHandler}
                sx={{
                    mt: 12
                }}
            >
                <Typography className="label">Continue</Typography>
            </Submit>

            {loading ? <Loader 
                style={{
                    position: 'fixed'
                }}
                    /> : ''}
        </Root>
    )
}