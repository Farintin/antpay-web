import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& .logo': {
    width: 234
  },
  '& .text': {
    fontSize: 14.4,
    fontWeight: 300,
    color: alpha('#fff', 1),
    lineHeight: '78%',
    '&.heading': {
      fontSize: 39,
      fontWeight: 500,
      color: '#36d7b7'
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