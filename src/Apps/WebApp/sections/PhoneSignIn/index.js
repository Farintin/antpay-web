import { useContext } from "react"
import { Box, Typography } from "@mui/material"
import { Root } from "./component"
import { LogoBrandVoilet } from "../../components/Logo"
import Form from '../../components/PhoneSignInForm'
import Button from "../../components/Button"
import Context from "../../pages/SignIn/context"



export default function (props) {
  const setSection = useContext(Context)

  return (
    <Root id={props.id} className={`section ${props.section === props.id ? 'active' : ''}`}>
      <Box className="wrapper" sx={{ pt: 8 }}>

        <LogoBrandVoilet 
          style={{
            width: 150,
            marginBottom: 32
          }}
        />
        <Typography className="text article">
          Please confirm your country code and enter your phone number 
        </Typography>
        <Form setSection={setSection} />
        
        <Button 
          style={{ width: '100%', marginTop: 32 }}
          onClick={() => setSection('qrCodeSignIn-section')}
        >
          <Typography className="label">Log in by QR Code</Typography>
        </Button>
        
      </Box>
    </Root>
  )
}