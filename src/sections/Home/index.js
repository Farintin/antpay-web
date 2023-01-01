import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Root, Bg, Main } from "./component"
import MuiButton from '../../components/MuiButton'



export default function () {
  return (
    <Root id="home-section" className="page-section">
      <Bg src="/image/home-bg_1500x1000.jpg" />
      <Main>
        <Box className="content">
          <Typography className="text heading">
            Pay With Stickers
            Transact in 3 Seconds
          </Typography>
          <Typography className="text" sx={{ pr: '10%'}}>
            We are a banking playground where users seamlessly transact by just sending 
            a playful sticker. Welcome to a world of endless opportunity.
          </Typography>
          <MuiButton href="#" sx={{ mt: '32px!important' }}>
            <Typography className="label">download antpay</Typography>
          </MuiButton>
        </Box>
      </Main>
    </Root>
  )
}