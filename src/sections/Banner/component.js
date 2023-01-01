import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import MuiButton from '../../components/MuiButton'



const Root = styled(Box)(() => ({
  background: `linear-gradient(90deg, rgb(0 0 0 / 100%) -9%, rgb(255 255 255 / 0%) 60%),
                url(image/lady-staring-at-phone.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'right center',
  '& .wrapper': {
    display: 'flex',
    alignItems: 'center',
    padding: '48px 0',
    '& .content': {
      padding: 32,
      '& > *': {
        margin: '24px 0',
        display: 'inline-block'
      },
      '& .text': {
        color: '#fff',
        lineHeight: '75%'
      },
      '& .heading': {
        fontSize: 64,
        fontWeight: 700,
        lineHeight: '120%'
      },
      '& .article': {
        display: 'flex',
        alignItems: 'center',
        '& .text': {
          fontSize: 27,
          fontWeight: 500
        },
        '& .dot': {
          width: 6,
          height: 6,
          backgroundColor: '#fff',
          borderRadius: 16,
          margin: '0 6px'
        }
      }
    }
  }
}))

const Button = styled(MuiButton)(() => ({
  padding: '20px 34px',
  '& .label': {
    fontSize: 16,
    fontWeight: 600
  }
}))



export { Root, Button }