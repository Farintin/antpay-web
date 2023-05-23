import { useNavigate } from "react-router"
import { Box, Typography } from "@mui/material"
import SignInLayout from "../../layout/SignInLayout"
import { Root } from "./component"
import { LogoBrandVoilet } from "../../components/Logo"
import Form from '../../components/PhoneSignInForm'
import Button from "../../components/Button"



export default function () {
  const navigate = useNavigate()

  return (
    <SignInLayout>
      <Root>
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

          <Form/>
          
          <Button 
            style={{ width: '100%', marginTop: 32 }}
            onClick={() => navigate('/qrSignIn', { replace: false })}
          >
            <Typography className="label">Log in by QR Code</Typography>
          </Button>
          
        </Box>
      </Root>
    </SignInLayout>
  )
}