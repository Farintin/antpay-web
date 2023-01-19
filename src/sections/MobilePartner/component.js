import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  backgroundColor: '#fff',
  position: 'relative',
  padding: '32px 0',
  width: '100%',
  zIndex: 1,
  '& .wrapper': {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  '& .curve': {
    position: 'absolute',
    width: '100%',
    height: '40%',
    backgroundColor: 'inherit',
    '&.top': {
      bottom: '99%',
      background: 'radial-gradient(120% 150% at top, transparent 50%, #fff 51.6%)',
    },
    '&.bottom': {
      top: '99%',
      background: 'radial-gradient(120% 150% at bottom, transparent 50%, #fff 51.6%)',
    }
  },
  '& .heading': {
    position: 'absolute',
    bottom: '135%',
    left: '50%',
    transform: 'translate(-50%)',
    color: '#fff',
    fontSize: 36,
    fontWeight: 700,
    width: 'max-content'
  }
}))

const Slide = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  overflowX: 'scroll',
  padding: '16px 32px 0',
  '& .image': {
    width: 120,
    margin: '0 32px'
  }
}))



export { Root, Slide }