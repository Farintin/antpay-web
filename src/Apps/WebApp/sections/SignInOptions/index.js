import { useContext } from "react"
import { Box, Typography } from "@mui/material"
import { Root } from "./component"
import { LogoBrandVoilet } from "../../components/Logo"
import Button from "../../components/Button"
import Context from "../../pages/SignIn/context"



export default function (props) {
  const setSection = useContext(Context)

  return (
    <Root id={props.id} className={`section ${props.section === props.id ? 'active' : ''}`}>
      <Box className="wrapper">

        <LogoBrandVoilet 
          style={{
            width: 165,
            marginBottom: 32
          }}
        />
        <Typography className="text article">
          Continue with a sign in method. 
        </Typography>
        
        <Button 
          sx={{ width: .72, my: '16px!important' }}
        >
          <Typography className="label">Scan QR Code: X</Typography>
        </Button>
        <Button 
          sx={{ width: .72, my: '16px!important' }}
          onClick={() => setSection('phoneSignIn-section')}
        >
          <Typography className="label">Log in by PHONE NUMBER</Typography>
        </Button>
        
      </Box>
    </Root>
  )
}