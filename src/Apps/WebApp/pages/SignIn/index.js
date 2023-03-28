import { useState, useRef } from "react";
import Box from "@mui/material/Box"
import { Root } from "./component"
import { SignInOptions, QrCodeSignIn, PhoneSignIn, SmsVerificationCode } from '../../sections'
import Context from "./context"



export default function () {
  const rootDom = useRef(null)
  const defaultSection = 'qrCodeSignIn-section'
  const [section, setSection] = useState(defaultSection)

  return (
    <Context.Provider value={setSection}>
      <Root ref={rootDom}>
        <Box className="wrapper">
          
          <SignInOptions id='signInOptions-section' section={section} />
          <QrCodeSignIn id='qrCodeSignIn-section' section={section} />
          <PhoneSignIn id='phoneSignIn-section' section={section} />
          <SmsVerificationCode id='smsVerificationCode-section' section={section} />

        </Box>
      </Root>
    </Context.Provider>
  )
}