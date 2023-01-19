import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  height: '100vh',
  '& .wrapper': {
    height: '100%'
  }
}))



export { Root }