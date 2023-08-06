import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"





const Root = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.primary.main,
  '& > .wrapper': {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > .content': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginBottom: 64,
      '& .logo': {
        width: 234
      },
      '& .text': {
        fontSize: 14.4,
        fontWeight: 400,
        color: alpha('#fff', .99),
        lineHeight: '78%'
      },
      '& .info': {
        '& > .wrapper': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end'
        }
      }
    }
  }
}))

const Loader = styled(Box)(() => ({
  width: 285,
  height: 6,
  backgroundColor: alpha('#000', .15),
  borderRadius: 8,
  '& .bar': {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 'inherit',
    '&.loading': {
      animation: 'loading 2s linear',
    }
  }
}))



export { Root, Loader }