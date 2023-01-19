import Box from "@mui/material/Box"
// import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  position: 'relative',
  zIndex: 0
}))

const Bg = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundImage: 'url(/image/stickers-bg-aqua.png)',
  backgroundPosition: '18% 36%',
  zIndex: -2,
  opacity: .18
}))

const Main = styled(Box)(() => ({
  position: 'relative',
  '& .wrapper': {
    padding: '64px 0',
    position: 'relative'
  }
}))

const Gradient = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: -1,
  background: `linear-gradient(360deg, #22003D -24%, #ADFFE1 100%)`,
  opacity: 1
}))

const About = styled(Grid)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  padding: '0',
  '& .col': {
    '&.col-1': {
      display: 'flex',
      flexDirection: 'center!important',
      alignItems: 'center',
      '& img.notification': {
        width: '75%',
        margin: '0 auto',
        display: 'block'
      }
    },
    '&.col-2': {
      display: 'flex',
      zIndex: -1,
      '& .content': {
        width: '100%', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '32px 18px 0',
        '& .heading': {
          '& .text': {
            fontSize: 30,
            fontWeight: 700,
            color: theme.palette.primary.main,
            lineHeight: '75%'
          }
        },
        '& .article': {
          padding: 24,
          marginTop: 16,
          paddingBottom: 0,
          '& .text': {
            fontSize: 20,
            fontWeight: 500,
            color: theme.palette.primary.main,
            lineHeight: '165%',
            textAlign: 'left'
          }
        }
      }
    }
  }
}))


export { Root, Bg, Gradient, Main, About }