import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import GridLoader from "react-spinners/GridLoader"
import { Box, Grid, Typography } from "@mui/material"
import SignInLayout from "../../layout/SignInLayout"
import { Root, Main, List } from "./component"
import { LogoBrandVoilet } from "../../components/Logo"
import Button from "../../components/Button"

export default function () {
  const qrCodeDom = useRef(null)
  const [qrCodeLoading, setQrCodeLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setQrCodeLoading(false)
    }, 6000)
  }, [])
  
  useEffect(() => {
    if (qrCodeLoading) {
      qrCodeDom.current.classList.add('load')
    } else {
      qrCodeDom.current.classList.remove('load')
    }
  }, [qrCodeLoading])

  return (
    <SignInLayout>
      <Root>
        <Box 
          className="wrapper"
          style={{ 
            padding: 32
          }}
        >

          <LogoBrandVoilet 
            style={{
              width: 180,
              marginTop: 4,
              marginBottom: 14
            }}
          />

          <Main>
            <Box className="wrapper" sx={{ px: 8, pt: 5, pb: 12, pr: 4 }}>
              <Grid container spacing={0} className='grid'>
                <Grid item xs={6} className='col col-1'>
                  <Box className='wrapper'>

                    <Typography className="text heading">
                      Connect Antpay on your desktop
                    </Typography>

                    <List>
                      <li className="item">
                        <Typography className="text">Open your Antpay mobile app</Typography>
                      </li>
                      <li className="item">
                        <Typography className="text">Goto <span className="bold">Settings</span>, tap on <span className="bold">Other Devices</span></Typography>
                      </li>
                      <li className="item">
                        <Typography className="text">Tap on <span className="bold">Link Device</span></Typography>
                      </li>
                      <li className="item">
                        <Typography className="text">Point camera at the screen to authenticate QR Code.</Typography>
                      </li>
                    </List>
                    
                  </Box>
                </Grid>
                <Grid item xs={6} className='col col-2'>
                  <Box 
                    className='wrapper'
                    sx={{
                      pl: 8
                    }}
                  >

                    <Box 
                      ref={qrCodeDom}
                      id="QrCode"
                    >

                      <GridLoader 
                        color="#36d7b7"
                        loading={qrCodeLoading}
                        size={24}
                        aria-label="Loading Spinner"
                        data-testid="loader" />

                      <img 
                        src="/image/antpay-qrcode-design.png"
                        alt="qrcode"
                        style={{
                          width: '100%'
                        }} />

                    </Box>

                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Main>

          <Typography 
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 400,
              marginTop: 16
            }}
          >
            Or
          </Typography>
          
          <Button 
            style={{ marginTop: 16 }}
            onClick={() => navigate('/phoneSignIn', { replace: false })}
          >
            <Typography className="label">Log in by phone number</Typography>
          </Button>
          
        </Box>
      </Root>
    </SignInLayout>
  )
}