import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to top, rgb(0 0 0 / 84%) 36%, ${alpha(theme.palette.primary.main, .36)} 84%),
                url(/image/lady-staring-at-phone_lg.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  height: '100%',
  '& .wrapper': {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    '& .content': {
      padding: 16,
      paddingBottom: 48,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: '24px 0',
        display: 'inline-block'
      },
      '& .text': {
        color: '#fff',
        lineHeight: '135%',
        fontSize: 25,
        fontWeight: 500,
        textAlign: 'center'
      },
    }
  }
}))



export { Root }