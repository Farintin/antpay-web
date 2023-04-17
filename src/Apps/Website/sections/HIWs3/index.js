import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Root } from "./component"



export default function () {
  return (
    <Root>
      <Box className="bg" />
      
      <Grid container spacing={0} className="grid">
        <Grid item={true} xs={6.6} className="col col-1">
          <Box className="image">
            <img src="/image/geo.png" alt="antpay connect concept" className="image" />
          </Box>
        </Grid>
        <Grid item={true} xs={5.4} className="col col-2">
          
          <Typography className="heading">Transact in 3 seconds</Typography>
          <Box className="steps">

            <Box className="row">

              <Box className="item number">
                <Box className="goo">
                  <Box className="node xl" style={{ width: '75%', height: '70%' }} />
                </Box>
                <Typography className="text">1 .</Typography>
              </Box>
              <Box className="item article">
                <Typography className="text">
                  Click the sticker icon to choose <br/>
                  the value of the currency you want to <br/>
                  send.
                </Typography>
              </Box>

            </Box>

            <Box className="row">

              <Box className="item number" style={{ transform: 'translateX(4.5px)' }}>
                <Box className="goo">
                  <Box className="node xl" />
                  <Box className="node lg" sx={{ top: '0%', left: '5%'}} />
                  <Box className="node lg" sx={{ bottom: '0%', left: '5%'}} />
                </Box>
                <Typography className="text">2 .</Typography>
              </Box>
              <Box className="item article">
                <Typography className="text">
                  Select a sticker with the value of the <br/>
                  currency and send.
                </Typography>
              </Box>

            </Box>

            <Box className="row" style={{ marginTop: 30 }}>
              
              <Box className="item number" style={{  }}>
                <Box className="goo" sx={{ width: 66, height: 66, transform: 'rotateZ(6deg)' }}>
                  <Box className="node xl" />
                  <Box className="node lg" sx={{ top: '40%', left: '-25%'}} />
                  <Box className="node lg" sx={{ top: '-15%', right: '10%'}} />
                  <Box className="node lg" sx={{ bottom: '-15%', right: '10%'}} />
                </Box>
                <Typography className="text">3 .</Typography>
              </Box>
              <Box className="item article" style={{  }}>
                <Typography className="text">
                  Input your transaction pin to <br/>
                  complete the transaction.
                </Typography>
              </Box>

            </Box>
          </Box>

        </Grid>
      </Grid>


      
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{width: 0, height: 0}}>
        <defs>
          <filter id="hiwsGoo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8.7" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" result="main" />
          </filter>
        </defs>
      </svg>

    </Root>
  )
}