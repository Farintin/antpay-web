import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '8px 32px 64px',
  overflow: 'overlay'
}))



export { Root }