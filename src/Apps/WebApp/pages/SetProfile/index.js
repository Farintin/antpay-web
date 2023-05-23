import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import { Root } from "./component"
import SignUpLayout from "../../layout/SignUpLayout"
import Form from '../../components/SetProfileForm'



export default function () {

  return (
    <SignUpLayout>

      <Root>
        <Box className="wrapper" sx={{ pt: 8 }}>

          <Typography className="text heading">
            Set up your profile 
          </Typography>
          <Form/>
          
        </Box>
      </Root>

    </SignUpLayout>
  )
}