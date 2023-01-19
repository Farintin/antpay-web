import Box from "@mui/material/Box"
// import Container from "@mui/material/Container"
import styled from "@mui/material/styles/styled"
import MuiContainer from "../../components/MuiContainer"



const Root = styled(Box)(() => ({
  height: '100vh',
  position: 'relative',
  zIndex: 0,
  backgroundImage: 'url(/image/stickers-bg-black_w1500-180deg.png)'
}))

const Bg = styled('img')(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  objectFit: 'cover',
  objectPosition: 'center',
  zIndex: -1,
  opacity: .978
}))

const Main = styled(MuiContainer)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  '& .content': {
    width: '45%',
    marginTop: '0%',
    marginBottom: '5%',
    '& > *': {
      margin: '18px 0',
      display: 'inline-block'
    },
    '& .text': {
      color: theme.palette.primary.main,
      fontSize: 15,
      fontWeight: 600,
      lineHeight: '150%'
    },
    '& .heading': {
      display: 'flex',
      alignItems: 'center',
      '& > *:first-child': {
        marginLeft: '0px!important'
      },
      '& > *:last-child': {
        marginRight: '0px!important'
      },
      '& .text': {
        textTransform: 'capitalize',
        fontSize: 46,
        fontWeight: 700,
        lineHeight: '75%',
        margin: '0 4px'
      },
      '& .dot': {
        marginTop: -18
      }
    }
  }
}))



export { Root, Bg, Main }