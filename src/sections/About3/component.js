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
  backgroundImage: 'url(/image/stickers-bg-black_w1500-180deg.png)',
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
  background: `linear-gradient(360deg, #22003D -500%, #ADFFE1 100%)`,
  opacity: .87
}))

const About = styled(Grid)(({ theme }) => ({
  width: '66%',
  margin: '0 auto',
  padding: '96px 0 64px',
  transform: 'translateX(-2%)',
  '& .col': {
    '&.col-1': {
      position: 'relative',
      '& img.notification': {
        width: '100%',
        scale: '1',
        marginLeft: '7%'
      },
      '& .shadow': {
        position: 'absolute',
        bottom: '3%',
        zIndex: -1,
        backgroundColor: 'rgb(0 0 0 / 59%)',
        borderRadius: 32,
        width: '70%',
        marginLeft: '20%',
        height: 40,
        boxShadow: '8px 8px 16px 24px rgb(0 0 0 / 30%)'
      }
    },
    '&.col-2': {
      display: 'flex',
      zIndex: -1,
      '& .content': {
        width: '100%', 
        position: 'relative',
        '& .heading': {
          position: 'absolute',
          bottom: '90%',
          right: '-3%',
          '& .text': {
            fontSize: 36,
            fontWeight: 700,
            color: '#000',
            lineHeight: '75%'
          }
        },
        '& .article': {
          padding: '32px 42px 24px 48px',
          borderRadius: '0 32px 32px 0',
          backgroundColor: theme.palette.primary.main,
          position: 'absolute',
          top: '15%',
          minHeight: '69%',
          width: '115%',
          '& .text': {
            fontSize: 14.7,
            fontWeight: 500,
            color: '#fff',
            lineHeight: '27px'
          }
        }
      }
    }
  }
}))


export { Root, Bg, Gradient, Main, About }