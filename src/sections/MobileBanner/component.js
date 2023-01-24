import Box from "@mui/material/Box"
import { alpha, styled } from "@mui/material/styles"
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
    backgroundColor: alpha('#000', .09),
    '& .content': {
      padding: 32,
      '& > *': {
        margin: '18px 0',
        display: 'inline-block'
      },
      '& .text': {
        color: alpha('#fff', .87),
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
        flexWrap: 'wrap',
        '& .text': {
          fontSize: 22.5,
          fontWeight: 500,
          padding: '6px 0px'
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