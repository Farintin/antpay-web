import { Box, Typography } from "@mui/material"
import SignInLayout from "../../layout/SignInLayout"
import { Root } from "./component"
import Form from '../../components/OtpForm'



export default function () {

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

          <Form />
          
        </Box>
      </Root>
    </SignInLayout>
  )
}