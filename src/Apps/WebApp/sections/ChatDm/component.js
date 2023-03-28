import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  height: '100%',
  backgroundImage: 'url(/image/stickers-bg-aqua-180deg.png)',
  backgroundSize: '111% auto',
  backgroundPosition: 'center',
  backdropFilter: 'brightness(.01)',
  '& > .wrapper': {
    height: '100%',
    background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, .9)} 0%, ${alpha(theme.palette.primary.main, .45)} 100%)`,
    overflow: 'overlay',
    '& .text': {
      fontWeight: 400,
      fontSize: 13.5,
      lineHeight: '150%',
      letterSpacing: '0px',
      color: '#000',
      '&.heading': {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 19.5
      },
      '&.article': {
        textAlign: 'center',
        width: '75%'
      }
    }
  }
}))



export { Root }