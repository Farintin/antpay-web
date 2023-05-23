import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/image/stickers-bg-aqua-180deg.png)',
  backgroundSize: '111% auto',
  backgroundPosition: 'center',
  backdropFilter: 'brightness(.01)',
  '& > .wrapper': {
    width: '100%',
    height: '100%',
    background: `linear-gradient(360deg, ${alpha('#fff', .978)} -30%, ${alpha(theme.palette.primary.lighter, .978)} 150%)`,
    overflow: 'overlay'
  }
}))



export { Root }