import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Root, Bg, Main } from "./component"
import MuiButton from '../../components/MuiButton'
import { AppStoreIcon, PlayStoreIcon } from "../../components/icon"



export default function () {
  return (
    <Root id="home-section" className="page-section">
      <Bg src="/image/home-bg_1500x1000.jpg" />
      <Main>

        <Box className="content">
          <Typography className="text heading">
            <img 
              src="/image/cash_w100.png" 
              className="icon image pay" 
              alt="pay" 
              style={{ 
                boxShadow: 'rgb(0 0 0 / 30%) 0px 40.5px 4.8px -21.6px'
              }} 
            /> 
             With 
            <Box className="stickerText">
              <Typography className="text goo">Stickers</Typography>
              <Typography className="text main">Stickers</Typography>
            </Box>
            <span className="transactText"> Transact </span> 
            <span className="smallText" style={{ marginLeft: 2, marginRight: 4 }}> in </span> 
            3
            <img src="/image/time4_w100.png" className="icon image clock one" alt="time seconds clock" />
            <img src="/image/time4_w100.png" className="icon image clock two" alt="time seconds clock" />
            <img src="/image/time4_w100.png" className="icon image clock three" alt="time seconds clock" />
            's
          </Typography>
          <Typography className="text" sx={{ pr: '10%'}}>
            We are a banking playground where users seamlessly transact by just sending 
            a playful sticker. Welcome to a world of endless opportunity.
          </Typography>
          <MuiButton href="#" sx={{ mt: '32px!important' }}>
            <Typography className="label">
              download
            </Typography>
            <PlayStoreIcon style={{ marginRight: 0 }} />
            <AppStoreIcon style={{ marginTop: -4, marginLeft: 6 }} />
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