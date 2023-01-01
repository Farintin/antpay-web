import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import styled from "@mui/material/styles/styled"



const Root = styled(Box)(() => ({
  height: '100vh',
  position: 'relative',
  zIndex: 0
}))

const Bg = styled('img')(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  objectFit: 'cover',
  objectPosition: 'center',
  zIndex: -1
}))

const Main = styled(Container)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  // position: 'relative',
  '& .content': {
    width: '40%',
    marginTop: '0%',
    marginBottom: '5%',
    // position: 'absolute',
    // top: '55%',
    // transform: 'translate(0px,-50%)',
    '& > *': {
      margin: '16px 0',
      display: 'inline-block'
    },
    '& .text': {
      color: '#fff',
      fontSize: 15,
      fontWeight: 500,
      lineHeight: '150%',
      '&.heading': {
        fontSize: 39,
        fontWeight: 700,
        lineHeight: '130%'
      }
    }
  }
}))



export { Root, Bg, Main }