import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/image/stickers-bg-aqua-180deg.png)',
  backgroundSize: '111% auto',
  backgroundPosition: 'center',
  backdropFilter: 'brightness(.01)',
  '& > .wrapper': {
    width: '100%',
    height: '100%',
    background: `linear-gradient(360deg, ${alpha('#2CA580', .978)} -28.83%, ${alpha('#ADFFE1', .978)} 103.44%)`,
    overflow: 'overlay'
  }
}))



export { Root }