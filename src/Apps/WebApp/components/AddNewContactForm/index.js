import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"

import { Box, Grid, Typography } from "@mui/material"

import { Root, Input, CountryList, Flag, PhoneInput, Submit } from './component'
import ChevronDownIcon from "../icons/ChevronDown.icon"
import ChevronUpIcon from "../icons/ChevronUp.icon"

import { countries } from '../../resource/country'

import { setInAppMessage, setInAppError, setInAppOnlineError, setContacts } from '../../store/reducer/contacts'





const countryCodeList = countries.map((country) => country.code)
export default function(props) {
    const accessToken = localStorage.getItem('accessToken')
    const countryListDom = useRef(null)
    const phoneInputDom = useRef(null)
    const countryListTogglerDom = useRef(null)
    const submitBtnDom = useRef(null)
    const { isOnline } = useSelector(state => state.socketStates)
    const { contacts } = useSelector(state => state.contacts)
    const [countryList, setCountryList] = useState(countries)
    const [autocomplete, setAutocomplete] = useState(false)
    const defaultCountry = countries[0]
    const [country, setCountry] = useState(defaultCountry)
    const [countryCode, setCountryCode] = useState(country.code)
    const phoneNumberPlaceholder = 'phone number'
    const [phoneNumber, setPhoneNumber] = useState(phoneNumberPlaceholder)
    const [click, setClick] = useState(false)
    const [dropdownClick, setDropdownClick] = useState(false)
    const [autoListClick, setAutoListClick] = useState(false)
    const [submitOk, setSubmitOk] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()



    const fetchPhonebook = () => {
        axios.get('http://localhost:5000/v1/users/user/phonebook', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
          .then(response => {
            const { data } = response
            if (data.msg === 'ok') {
              const phonebook = data.data
              dispatch(setContacts(phonebook.contacts))
            } else {
              console.log('phonebookResponse:', response)
            }
          })
          .catch(error => {
            console.log('phonebookErrorResponse:', error)
          })
    }



    const toggleDropdownHandler = () => {
        setAutocomplete(!autocomplete)
        setDropdownClick(true)
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
        if (isOnline) {
            if (submitOk) {
                setLoading(true)
                const phone = {
                    phone: {
                        countryName: country.name,
                        countryCode: country.code === countryCode ? countryCode : '',
                        number: `${countryCode}${phoneNumber}`
                    }
                }
                const existingContact = contacts.find(contact => contact.phone.number === phone.phone.number)
                if (existingContact) {
                    setLoading(false)
                    dispatch(setInAppError('Contact already exist in your contacts.'))
                } else {
                    axios.put('http://localhost:5000/v1/users/user/addContacts', [
                        phone
                      ],
                      {
                        headers: {
                          Authorization: `Bearer ${accessToken}`
                        }
                      })
                      .then(response => {
                        if (response.data.msg === 'success') {
                            props.renderHandler(false)
                            fetchPhonebook()
                            dispatch(setInAppMessage('Contact phonenumber successfully added to contacts.'))
                        } else {
                            setLoading(false)
                            dispatch(setInAppError('Server error.'))
                            console.log('addContacts axiosResponse:', response)
                        }
                      })
                      .catch(error => {
                        setLoading(false)
                        dispatch(setInAppError('Network error.'))
                        console.log('addContacts axiosErrorResponse:', error)
                      })
                }
            }
        } else {
            dispatch(setInAppOnlineError())
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
        setCountryCode(country.code)
        setPhoneNumber(phoneNumberPlaceholder)
    }, [country])

    useEffect(() => {
        countryCodeSearchHandler()
    }, [countryCode])

    useEffect(() => {
        if (autocomplete && click && !dropdownClick && !autoListClick) {
            setAutocomplete(false)
        }
        
        if (autocomplete) {
            countryListDom.current.classList.remove('collapse')
            countryListTogglerDom.current.classList.remove('collapse')
        } else {
            setCountryList(countries)
            countryListDom.current.classList.add('collapse')
            countryListTogglerDom.current.classList.add('collapse')
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
    }, [autocomplete, click, dropdownClick, autoListClick])
    
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

            <Box className='wrapper'>
                <PhoneInput 
                    ref={phoneInputDom}
                    className="phoneInput"
                >
                    <Box className="wrapper">
                        <Grid
                            container 
                            spacing={0} 
                            className='grid'
                        >
                            <Grid item xs='auto' className='col col-1'>
                                <Typography 
                                    className="countryEmoji"
                                >
                                    {country.emoji}
                                </Typography>
                            </Grid>
                            <Grid item xs='auto' className='col col-2'>
                                <Box 
                                    ref={countryListTogglerDom}
                                    className="dropdownBtn"
                                    onClick={toggleDropdownHandler}
                                >
                                    <ChevronDownIcon/>
                                    <ChevronUpIcon/>
                                </Box>
                            </Grid>
                            <Grid item xs='auto' className='col col-3'>
                                <Input 
                                    type="text" 
                                    id="countryCode"
                                    name="countryCode"
                                    size='4'
                                    value={countryCode}
                                    onChange={countryCodeChangeHandler}
                                    className="input countryCode"
                                        />
                            </Grid>
                            <Grid item xs='auto' className='col col-4'>
                                <Box className="seperator"/>
                            </Grid>
                            <Grid item xs className='col col-5'>
                                <Input 
                                    type="text" 
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onFocus={phoneNumberFocusHandler}
                                    onBlur={phoneNumberBlurHandler}
                                    onChange={phoneNumberChangeHandler}
                                    className="input phoneNumber"
                                        />
                            </Grid>
                        </Grid>
                    </Box>
                </PhoneInput>
                
                <CountryList 
                    ref={countryListDom}
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

                <Submit 
                    ref={submitBtnDom}
                    onClick={submitHandler}
                >
                    <Typography className="label">Submit</Typography>
                </Submit>
            </Box>

            {loading ? 
                <Box className="loadingModal">
                    <ClipLoader 
                        color="#36d7b7"
                        loading
                        size={60}
                        speedMultiplier={1.2}
                        aria-label="Loading Spinner"
                        data-testid="loader" />
                </Box> : ''}
            
        </Root>
    )
}