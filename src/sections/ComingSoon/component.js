import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to right, rgb(0 0 0 / 66%) 40%, ${alpha(theme.palette.primary.main, .25)}  75%),
                url(/image/lady-staring-at-phone_lg.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  height: '100%',
  '& .wrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .content': {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '90%',
      '& > *': {
        margin: '18px 0',
        display: 'inline-block'
      },
      '& .text': {
        color: '#fff',
        lineHeight: '120%',
        fontSize: 48,
        fontWeight: 500,
        textAlign: 'center'
      },
    }
  }
}))



export { Root }