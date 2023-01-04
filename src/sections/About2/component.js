import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
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
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: '120% auto',
  backgroundPosition: '18% 36%',
  zIndex: -2,
  opacity: .18
}))

const Gradient = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: -1,
  background: `linear-gradient(360deg, #22003D -500%, #ADFFE1 100%)`,
  opacity: .9
}))

const Main = styled(Container)(() => ({
  padding: 64,
  '& .wrapper': {
    width: 'fit-content',
    maxWidth: '89%',
    margin: '0 auto'
  }
}))

const About = styled(Grid)(({ theme }) => ({
  width: '75%',
  margin: '0 auto',
  padding: '120px 0',
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
      // alignItems: 'center',
      zIndex: -1,
      '& .content': {
        width: '100%',  
        // marginBottom: '50%', 
        // marginTop: '-10%', 
        position: 'relative',
        '& .heading': {
          // padding: '32px 32px 32px',
          position: 'absolute',
          bottom: '91%',
          right: '5%',
          '& .text': {
            fontSize: 34,
            fontWeight: 700,
            color: '#000',
            // textAlign: 'right',
            lineHeight: '75%'
          }
        },
        '& .article': {
          padding: '32px 36px 24px 42px',
          borderRadius: '0 32px 32px 0',
          backgroundColor: theme.palette.primary.main,
          position: 'absolute',
          top: '14%',
          minHeight: '69%',
          width: '106%',
          // boxShadow: '16px 16px 48px 12px rgb(0 0 0 / 22%)',
          '& .text': {
            fontSize: 15,
            fontWeight: 500,
            color: '#fff',
            lineHeight: '28px'
          }
        }
      }
    }
  }
}))


export { Root, Bg, Gradient, Main, About }