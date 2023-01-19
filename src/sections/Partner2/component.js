import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  backgroundColor: '#fff',
  position: 'relative',
  padding: '32px 0',
  '& .wrapper': {
  },
  '& .curve': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'inherit',
    '&.top': {
      bottom: '99%',
      background: 'radial-gradient(130% 195% at top, transparent 50%, #fff 50.4%)',
    },
    '&.bottom': {
      top: '99%',
      background: 'radial-gradient(130% 195% at bottom, transparent 50%, #fff 50.4%)',
    }
  }
}))

const Partners = styled(Grid)(() => ({
  maxWidth: 900,
  margin: '0 auto',
  '& .MuiGrid-item': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 0px',
    '& .image': {
      width: '45%'
    }
  }
}))



export { Root, Partners }