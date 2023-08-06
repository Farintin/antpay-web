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
      position: 'relative',
      '& .bound': {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: 2,
        display: 'none'
      }
    }
  },
  '&.scrollbarIsVisible': {
    overflow: 'auto',
    paddingRight: 14
  }
}))



export { Root }