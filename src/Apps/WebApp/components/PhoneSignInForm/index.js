import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

import { Box, Typography } from "@mui/material"

import { Root, Input, CountryInput, CountryList, Flag, PhoneInput, Submit } from './component'
import ChevronDownIcon from "../icons/ChevronDown.icon"
import ChevronUpIcon from "../icons/ChevronUp.icon"

import { countries } from '../../resource/country'

import { setUserSignInState } from "../../store/reducer/userSignInState"





const countryCodeList = countries.map((country) => country.code)
export default function() {
    const countryInputDom = useRef(null)
    const phoneInputDom = useRef(null)
    const submitBtnDom = useRef(null)

    const [countryList, setCountryList] = useState(countries)
    const [autocomplete, setAutocomplete] = useState(false)
    const defaultCountry = countries[0]
    const [country, setCountry] = useState(defaultCountry)
    const [countryName, setCountryName] = useState(country.name)
    const [countryCode, setCountryCode] = useState(country.code)
    const [countryInputFocus, setCountryInputFocus] = useState(false)
    const phoneNumberPlaceholder = 'phone number'
    const [phoneNumber, setPhoneNumber] = useState(phoneNumberPlaceholder)
    const [click, setClick] = useState(false)
    const [dropdownClick, setDropdownClick] = useState(false)
    const [autoListClick, setAutoListClick] = useState(false)
    const [submitOk, setSubmitOk] = useState(false)

    const navigate = useNavigate()

    const { userSignInState } = useSelector(state => state.userSignInAuth)
    const dispatch = useDispatch()



    const toggleDropdownHandler = () => {
        setAutocomplete(!autocomplete)
        setDropdownClick(true)
    }
    const countryNameChangeHandler = (e) => {
        setCountryName(e.target.value)
    }
    const countryCodeChangeHandler = (e) => {
        const { value } = e.target
        let error = false
        for (let char of value.split('')) {
            if (!'+1234567890'.includes(char)) {
                error = true
                break
            }
        }
        !error ? setCountryCode(value) : ''
    }
    const countryInputFocusHandler = () => {
        setCountryInputFocus(true)
    }
    const countryInputBlurHandler = () => {
        setCountryInputFocus(false)
    }
    const countryNameSearchHandler = () => {
        let avalCountries = []
        if (countryName != '' && countryName != defaultCountry.name) {
            const strCountries = countries.map((countryItem) => JSON.stringify(countryItem))
            countries.forEach((countryItem) => {
                const countryObjIndex = countries.indexOf(countryItem)
                const subnames = countryItem.name.toLowerCase().split(' ')
                subnames.forEach((subname) => {
                    const keywords = countryName.trim().toLowerCase().split(' ')
                    keywords.forEach((keyword) => {
                        if (!avalCountries.includes(strCountries[countryObjIndex])) {
                            const nChar = keyword.length
                            if (keyword === subname.slice(0, nChar)) {
                                avalCountries.push(strCountries[countryObjIndex])
                            }
                        }
                    })
                })
            })
            avalCountries = avalCountries.map((countryItem) => JSON.parse(countryItem))
        } else {
            avalCountries = countries
        }
        setCountryList(avalCountries)
    }
    const countryCodeSearchHandler = () => {
        let countryValue = {
            name: 'not found',
            code: countryCode,
            image: ''
        }

        for (let countryObj of countries) {
            if (countryObj.code === countryCode) {
                countryValue = countryObj
                break
            }
        }
        setCountry(countryValue)
    }
    const countryClickHandler = (countryValue) => {
        setCountry(countryValue)
    }
    const phoneNumberFocusHandler = () => {
        phoneNumber === phoneNumberPlaceholder ? setPhoneNumber('') : ''
    }
    const phoneNumberBlurHandler = () => {
        phoneNumber === '' ? setPhoneNumber(phoneNumberPlaceholder) : ''
    }
    const phoneNumberChangeHandler = (e) => {
        const { value } = e.target
        let error = false
        for (let char of value.split('')) {
            if (!'1234567890'.includes(char)) {
                error = true
                break
            }
        }
        !error ? setPhoneNumber(value) : ''
    }
    const submissionValidator = () => {
        if (!countryCodeList.includes(country.code)) {
            setSubmitOk(false)
        } else if (phoneNumber === phoneNumberPlaceholder || phoneNumber === '') {
            setSubmitOk(false)
        } else {
            setSubmitOk(true)
        }
    }
    const submitHandler = () => {
        if (submitOk) {
            console.log('submitOk')
            const userPhone = {
                phone: {
                    countryName: country.name,
                    countryCode: country.code === countryCode ? countryCode : '',
                    number: `${countryCode}${phoneNumber}`
                }
            }
            dispatch(setUserSignInState({ ...userSignInState, ...userPhone }))
            axios.post('http://localhost:5000/v1/auth/user/phoneAuth', {
                ...userPhone
              })
              .then(response => {
                if (response.data.msg === 'success') {
                    navigate('/otpSignIn')
                } else {
                    console.log('otp not sent')
                    console.log('axiosResponse:', response)
                }
              })
              .catch(error => {
                console.log('axiosErrorResponse:', error)
              })
        }
    }
    


    useEffect(() => {
        window.onclick = function () {
          setClick(true)
        }

        submissionValidator()
    })
    
    useEffect(() => {
        autocomplete ? setAutocomplete(false) : ''
        setCountryName(country.name)
        setCountryCode(country.code)
        setPhoneNumber(phoneNumberPlaceholder)
    }, [country])

    useEffect(() => {
        countryNameSearchHandler()
    }, [countryName])

    useEffect(() => {
        if (countryCode !== country.code) countryCodeSearchHandler()
    }, [countryCode])

    useEffect(() => {
        if (autocomplete && click && !dropdownClick && !autoListClick && !countryInputFocus) {
            setAutocomplete(false)
        }
        
        if (autocomplete) {
            countryInputDom.current.classList.remove('collapse')
            countryInputDom.current.classList.add('expand')
        } else {
            setCountryList(countries)
            countryInputDom.current.classList.remove('expand')
            countryInputDom.current.classList.add('collapse')
            if (countryInputFocus) {
                setAutocomplete(true)
            }
        }

        if (click) {
            setClick(false)
        }
        if (dropdownClick) {
            setDropdownClick(false)
        }
        if (autoListClick) {
            setAutoListClick(false)
        }
    }, [autocomplete, click, dropdownClick, autoListClick, countryInputFocus])
    
    useEffect(() => {
        if (phoneNumber !== phoneNumberPlaceholder) {
            phoneInputDom.current.classList.add('notPlaceholder')
        } else {
            phoneInputDom.current.classList.remove('notPlaceholder')
        }
    }, [phoneNumber])
    
    useEffect(() => {
        if (!submitOk) {
            submitBtnDom.current.classList.add('disable')
        } else {
            submitBtnDom.current.classList.remove('disable')
        }
    }, [submitOk])


    return (
        <Root>
            <CountryInput 
                ref={countryInputDom}
                className='countryInput'
            >
                <Box className="wrapper">
                    <Box className="box input">
                        <Input 
                            value={countryName}
                            onChange={countryNameChangeHandler} 
                            onBlur={countryInputBlurHandler}
                            onFocus={countryInputFocusHandler}
                            />
                    </Box>
                    <Box 
                        className="box dropdownBtn"
                        onClick={toggleDropdownHandler}
                    >
                        <ChevronDownIcon/>
                        <ChevronUpIcon/>
                    </Box>
                </Box>
                <CountryList 
                    className="autoList"
                    onClick={() => setAutoListClick(true)}
                >
                    {countryList.length !== 0 ? countryList.map((item, i) => (
                                <Box 
                                    className={`item ${item.name === country.name ? 'active' : ''}`} 
                                    key={i}
                                    onClick={() => countryClickHandler(item)}
                                >
                                    <Typography className="text">{item.name}</Typography>
                                    <Flag src={item.image} />
                                </Box>
                            )
                        ) : <Box 
                            className={`item`} 
                        >
                            <Typography className="text">not found</Typography>
                        </Box>
                    }
                </CountryList>
            </CountryInput>
            
            <PhoneInput 
                ref={phoneInputDom}
                className="phoneInput"
            >
                <Box className="wrapper">
                    <Box 
                        className="box countryCodeInput"
                    >
                        <Input 
                            type="text" 
                            id="countryCode"
                            name="countryCode"
                            value={countryCode}
                            onChange={countryCodeChangeHandler}
                            />
                    </Box>
                    <Box className="box seperator"/>
                    <Box className="box input">
                        <Input 
                            type="text" 
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onFocus={phoneNumberFocusHandler}
                            onBlur={phoneNumberBlurHandler}
                            onChange={phoneNumberChangeHandler}
                            />
                    </Box>
                </Box>
            </PhoneInput>

            <Submit 
                ref={submitBtnDom}
                onClick={submitHandler}
            >
                <Typography className="label">Sign In</Typography>
            </Submit>

        </Root>
    )
}