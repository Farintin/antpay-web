import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  '& > .wrapper': {
    width: 320,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& > *': {
      margin: '16px auto'
    },
    '& .text': {
      fontWeight: 400,
      fontSize: 13.5,
      lineHeight: '150%',
      letterSpacing: '0px',
      color: '#000',
      '&.heading': {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 19.5
      },
      '&.article': {
        textAlign: 'center',
        width: '75%'
      }
    }
  }
}))



export { Root }