import { Box, Typography } from "@mui/material"
import { Root } from "./component"
import Form from '../../components/ProfileForm'



export default function () {

  return (
    <Root>
      <Box className="wrapper" sx={{ pt: 8 }}>

        <Typography className="text heading">
          Set up your profile 
        </Typography>
        <Form/>
        
      </Box>
    </Root>
  )
}