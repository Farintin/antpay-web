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
    color: alpha('#fff', .99)
  },
  '& .e2e': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    '& svg': {
      fill: '#fff',
      '&.padlock': {
        width: 16,
        marginRight: 8
      }
    },
    '& .text': {
      lineHeight: '78%'
    }
  },
  '&.hide': {
      display: 'none'
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