import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import MuiButton from '../../components/MuiButton'



const Root = styled(Box)(() => ({
  '& .bannerImage': {
    width: '100%',
    height: 350,
    backgroundImage: 'url(/image/lady-staring-at-phone2.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
    backgroundPosition: '75%'
  },
  '& .wrapper': {
    display: 'flex',
    alignItems: 'center',
    padding: '24px 0px 48px',
    '& .content': {
      padding: 32,
      '& > *': {
        margin: '18px 0',
        display: 'inline-block'
      },
      '& .text': {
        color: '#fff',
        lineHeight: '75%'
      },
      '& .heading': {
        fontSize: 36,
        fontWeight: 700,
        lineHeight: '135%'
      },
      '& .article': {
        display: 'flex',
        alignItems: 'center',
        '& .text': {
          fontSize: 18,
          fontWeight: 400
        },
        '& .dot': {
          width: 4,
          height: 4,
          backgroundColor: '#fff',
          borderRadius: 16,
          margin: '0 6px'
        }
      }
    }
  }
}))

const Button = styled(MuiButton)(() => ({
  // padding: '24px 24px',
  /* '& .label': {
    fontSize: 16,
    fontWeight: 600
  } */
}))



export { Root, Button }