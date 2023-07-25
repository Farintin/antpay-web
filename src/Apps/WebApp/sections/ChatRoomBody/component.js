import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'overlay',
  padding: '8px 32px 0px',
  position: 'relative',
  flexGrow: 1,
  scrollBehavior: 'auto',
  '& > .wrapper': {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '& > .main': {
    }
  },
  '&.scrollbarIsVisible': {
    paddingRight: 8
  }
}))



export { Root }