import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Root, Bg, Main } from "./component"
import MuiButton from '../../components/MuiButton'
import { AppStoreIcon, PlayStoreIcon } from "../../components/icon"
// import { LogoBrandVoilet } from "../../components/Logo"



export default function () {
  return (
    <Root id="home-section" className="page-section">
      <Bg>
        <Box className="wrapper" />
      </Bg>

      <Main>
        {/* <LogoBrandVoilet href="" sx={{ m: '30px!important' }} /> */}
        <Box className="content">

          <Box className="heading">
            <Typography className="text">
              chat <br/>connect <br/>pay
            </Typography>
          </Box>
          <Typography className="text article">
            Ant Pay is a social payment platform 
            where users seamlessly transact through 
            messaging by sending stickers to each other.
          </Typography>
          <MuiButton to="/download" sx={{ mt: '18px!important' }}>
            <Typography className="label">
              download
            </Typography>
            <PlayStoreIcon style={{ marginRight: 0 }} />
            <AppStoreIcon style={{ marginTop: -4, marginLeft: 5.4 }} />
          </MuiButton>

        </Box>

      </Main>


      
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none'}}>
          <defs>
              <filter id="stickerTextGoo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -1" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
              </filter>
          </defs>
      </svg>
    </Root>
  )
}