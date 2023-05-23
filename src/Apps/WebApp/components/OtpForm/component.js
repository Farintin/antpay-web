import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"
import Button from "../Button"



const Root = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': {
    // margin: '16px 0'
  }
}))
const OTPInput = styled(Box)(() => ({
  position: 'relative',
  '& .display': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 0,
    '& .box': {
      width: 64,
      height: 64,
      borderRadius: 16,
      backgroundColor: '#fff',
      margin: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      '& .text': {
        borderRadius: 16,
        textAlign: 'center',
        fontSize: 42,
        fontWeight: 500
      },
      '& .caret': {
        width: 1,
        height: '60%',
        backgroundColor: '#000',
        animation: 'blink-caret .75s step-end infinite',
        '&.hide': {
          display: 'none'
        }
      }
    }
  },
  '& #otpValue': {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0
  }
}))

const Submit = styled(Button)(({ theme }) => ({
  width: '100%',
  '&.disable': {
    cursor: 'not-allowed',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .label': {
          color: '#fff'
      }
    }
  }
}))



export { 
  Root,
  OTPInput,
  Submit
}