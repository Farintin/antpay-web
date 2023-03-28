import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import styled from "@mui/material/styles/styled"



const Root = styled(Box)(() => ({
  height: '108vh',
  paddingBottom: '20%',
  position: 'relative',
  zIndex: 0,
  backgroundImage: 'url(/image/stickers-bg-black_w1500-180deg.png)'
}))

const Bg = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  background: `linear-gradient(360deg, #2CA580 -28.83%, #ADFFE1 103.44%)`,
  zIndex: -1,
  opacity: .978,
  '& .wrapper': {
    width: '100%',
    height: '100%',
    backgroundImage: `url(/image/home-bg_1500x1000.jpg)`,
    backgroundPosition: '100% -10%',
    backgroundSize: 'auto 60%',
    backgroundRepeat: 'no-repeat',
  }
}))

const Main = styled(Container)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '& .content': {
    width: '100%',
    marginTop: '0%',
    marginBottom: '5%',
    padding: '0 10px',
    '& > *': {
      margin: '6px 0',
      display: 'inline-block'
    },
    '& .text': {
      color: theme.palette.primary.main,
      fontSize: 12,
      fontWeight: 600,
      lineHeight: '135%'
    },
    '& .heading': {
      display: 'flex',
      alignItems: 'center',
      '& > *:first-of-type': {
        marginLeft: '0px!important'
      },
      '& > *:last-child': {
        marginRight: '0px!important'
      },
      '& .text': {
        textTransform: 'capitalize',
        fontSize: 31.5,
        fontWeight: 700,
        lineHeight: '117%',
        margin: '0 4px'
      }
    }
  }
}))



export { Root, Bg, Main }