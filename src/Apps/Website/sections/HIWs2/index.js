import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Root } from "./component"



export default function () {
  return (
    <Root>
      <Typography className="heading">Transact in 3 easy steps</Typography>
      <Grid container spacing={0} className="steps">
        <Grid item xs={0} className="col col-1">

          <Box className="item number">
            {/* <Box className="goo">
              <Box className="node xl" style={{ width: '60%', height: '60%' }} />
              <Box className="node md" sx={{ top: '0%', left: '55%'}} />
              <Box className="node lg" sx={{ bottom: '10%', left: '0%'}} />
              <Box className="node lg" sx={{ top: '60%', right: '-15%'}} />
              <Box className="node sm" sx={{ top: '10%', left: '5%'}} />
              <Box className="node xs" sx={{ top: '18%', left: '15%'}} />
            </Box> */}
            <Box className="goo">
              <Box className="node xl" style={{ width: '75%', height: '70%' }} />
            </Box>
            <Typography className="text">1 .</Typography>
          </Box>
          <Box className="item article" style={{ marginLeft: -2 }}>
            <Typography className="text">
              Type the amount<br/>
              &nbsp;&nbsp;you want to send with<br/>
              currency type ($200)
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={0} className="col col-2" sx={{ ml: '-2px'}}>

          <Box className="item number">
            <Box className="goo">
              <Box className="node xl" />
              <Box className="node lg" sx={{ top: '0%', left: '5%'}} />
              <Box className="node lg" sx={{ bottom: '0%', left: '5%'}} />
            </Box>
            <Typography className="text">2 .</Typography>
          </Box>
          <Box className="item article">
            <Typography className="text" style={{ lineHeight: '24px' }}>
              Select the generated<br/>
              sticker and send.
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={0} className="col col-3">
          
          <Box className="item number">
            <Box className="goo" style={{ width: 75, height: 75 }}>
              <Box className="node xl" />
              <Box className="node lg" sx={{ top: '40%', left: '-25%'}} />
              <Box className="node lg" sx={{ top: '-15%', right: '10%'}} />
              <Box className="node lg" sx={{ bottom: '-15%', right: '10%'}} />
            </Box>
            <Typography className="text">3 .</Typography>
          </Box>
          <Box className="item article" style={{ marginLeft: 0 }}>
            <Typography className="text">
              &nbsp;&nbsp;&nbsp;Click sticker to save<br/>
              &nbsp;and get credited<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;instantly.
            </Typography>
          </Box>

        </Grid>
      </Grid>


      
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'none'}}>
        <defs>
          <filter id="hiwsGoo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 45 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" result="main" />
          </filter>
        </defs>
      </svg>

    </Root>
  )
}