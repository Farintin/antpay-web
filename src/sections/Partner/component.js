import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  padding: '64px 0',
  backgroundColor: '#fff',
  '& .wrapper': {
  }
}))

const Partners = styled(Grid)(() => ({
  maxWidth: 800,
  margin: '0 auto',
  '& .MuiGrid-item': {
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: '0 1px 0 0', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .image': {
      width: '78%'
    },
    '&:last-of-type': {
      borderRightWidth: 0
    }
  }
}))



export { Root, Partners }