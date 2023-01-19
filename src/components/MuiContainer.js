import Container from '@mui/material/Container'
import { styled } from "@mui/material/styles"



const MuiContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: '87%'
  },
  [theme.breakpoints.up("lg")]: {
    width: '84%'
  }
}))



export default MuiContainer