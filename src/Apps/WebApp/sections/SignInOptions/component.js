import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'none',
  '& > .wrapper': {
    width: 540,
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: '16px auto'
    },
    '& .text': {
      fontWeight: 400,
      fontSize: 13.5,
      lineHeight: '150%',
      letterSpacing: '0px',
      color: '#000',
      '&.article': {
        textAlign: 'center',
        width: '45%'
      }
    }
  },
  '&.active': {
    display: 'block'
  }
}))



export { Root }