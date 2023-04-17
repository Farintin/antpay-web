import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Root, Bg, Main } from "./component"
import MuiButton from '../../components/MuiButton'
import { AppStoreIcon, PlayStoreIcon } from "../../components/icon"
import { LogoBrandVoilet } from "../../components/Logo"



export default function () {
  return (
    <Root id="home-section" className="page-section">
      <Bg src="/image/home-bg-bottom-fade.png" />

      <Main>

        <Box className="content">

          <LogoBrandVoilet href="" sx={{ mb: '30px!important' }} />

          <Box className="text heading">
            <Typography className="text">chat</Typography> 
            <Typography className="text dot"> . </Typography> 
            <Typography className="text">connect</Typography>
            <Typography className="text dot">.</Typography> 
            <Typography className="text">pay</Typography>
          </Box>

          <Typography className="text article" sx={{ pr: '10%'}}>
            Ant Pay is a social payment platform where users seamlessly 
            transact through messaging by sending stickers to each other.
          </Typography>

          <MuiButton to="/download" style={{ marginTop: 24 }}>
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