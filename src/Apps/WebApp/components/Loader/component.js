import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  position: 'relative',
  top: 0,
  left: 0,
  zIndex: 9999,
  width: '100%',
  height: '100%',
  backgroundColor: alpha('#000', .15),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0
}))


export { Root }