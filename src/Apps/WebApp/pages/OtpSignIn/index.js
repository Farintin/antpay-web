import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { Box, Typography } from "@mui/material"

import axios from "axios"

import SignInLayout from "../../layout/SignInLayout"

import { Root } from "./component"

import Form from '../../components/OtpForm'





export default function () {
  const { userSignInState } = useSelector(state => state.userSignInAuth)
  const { server } = useSelector(state => state.socketStates)
  const [otp, setOtp] = useState('')

  
  useEffect(() => {
    axios.post(`${server}/auth/user/getUserOtp`, {
      phone: userSignInState.phone
    })
    .then(response => {
      const { data } = response
      if (data.msg === 'success') {
        const otpDoc = data.data
        const otp = otpDoc.passcode
        console.log({ otp })
        setOtp(otp)
        alert(`Development delivery OTP \n ${otp}`)
      } else {
        console.log('fetchUserOtpResponse:', response)
      }
    })
    .catch(error => {
      console.log('fetchUserOtpErrorResponse:', error)
    })
  }, [])


  return (
    <SignInLayout>
      <Root>
        <Box className="wrapper" sx={{ pt: 8 }}>

          <Typography className="text heading" sx={{ mb: '32px!important' }}>
            Phone number comfirmation
          </Typography>

          <Typography className="text article">
            Enter the 4-digit code we just sent to you 
          </Typography>

          <Form devOtp={otp} />
          
        </Box>
      </Root>
    </SignInLayout>
  )
}