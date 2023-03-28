import { Box, Typography } from "@mui/material"
import { Root } from "./component"
import Form from '../../components/SmsVerificationCodeForm'



export default function (props) {

  return (
    <Root id={props.id} className={`section ${props.section === props.id ? 'active' : ''}`}>
      <Box className="wrapper" sx={{ pt: 8 }}>

        <Typography className="text heading" sx={{ mb: '32px!important' }}>
          Phone number comfirmation
        </Typography>
        <Typography className="text article">
          Enter the 4-digit code we just sent to you 
        </Typography>
        {props.section === props.id ? <Form /> : ''}
        
      </Box>
    </Root>
  )
}