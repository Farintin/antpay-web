import { useEffect, useRef, useState } from "react"
import axios from "axios"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from "@mui/material/styles"
import { LogoAquaGradient } from "./Logo"
import { SendIcon } from "./icon"



const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& .logo': {
    margin: 12,
    width: 'auto',
    '& img': {
      width: 63
    }
  },
  '& .form': {
    '--h': '48px',
    display: 'flex',
    alignItems: 'center',
    width: 480,
    height: 'calc(var(--h) - 3px)',
    position: 'relative',
    '& .inputWrapper': {
      width: '89%',
      height: '100%',
      backgroundColor: theme.palette.secondary.dark,
      borderRadius: 64,
      position: 'relative',
      '& .input': {
        width: '100%',
        height: '100%',
        padding: '0 24px',
        fontSize: 15,
        fontWeight: 700,
        color: 'rgba(0, 0, 0, .69)'
      },
      '& .error': {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        borderRadius: 64,
        padding: '0 24px',
        border: '3px solid',
        borderColor: alpha('#f00', .69),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        cursor: 'text',
        '& .text': {
          color: 'rgba(255, 0, 0, .75)',
          fontSize: 14,
          fontWeight: 500
        },
        '&.hide': {
          display: 'none'
        }
      },
      '& .successText': {
        width: '100%',
        height: '100%',
        padding: '0 24px',
        position: 'absolute',
        top: 0,
        borderRadius: 64,
        display: 'none',
        alignItems: 'center',
        opacity: 0,
        '& .text': {
          color: '#6fffdf',
          fontSize: 0,
          fontWeight: 500,
          transition: '4s'
        }
      }
    },
    '& .submit': {
      '--w': '48px',
      position: 'absolute',
      right: 0,
      width: 'var(--h)',
      height: 'var(--h)',
      minWidth: 'auto',
      backgroundColor: theme.palette.primary.lighter,
      borderRadius: '50%',
      fontSize: 20,
      fontWeight: 700,
      color: '#fff',
      textTransform: 'uppercase',
      marginLeft: 8,
      '&:hover': {
        backgroundColor: '#fff',
        '& .icon': {
          fill: theme.palette.primary.lighter
        }
      }
    }
  },
  '&.successful': {
    '& .form': {
      width: 540,
      transition: '.6s',
      '& .inputWrapper': {
        width: '93.6%',
        borderBottomLeftRadius: 0,
        backgroundColor: theme.palette.primary.lighter,
        transition: '0s',
        '& .input': {
          display: 'none'
        }
      },
      '& .successText': {
        display: 'flex',
        opacity: 1,
        '& .text': {
          fontSize: 19.5,
        }
      },
      '& .submit': {
        height: 'calc(var(--h) - 3px)',
        right: '6%',
        zIndex: -1,
        '& .icon': {
          width: '0px'
        }
      }
    }
  }
}))



export default function ({ ...props }) {
  const dom = useRef(null)
  const errorDom = useRef(null)
  const defaultValue = 'Your email...'
  const [value, setValue] = useState(defaultValue)

  const focusHandler = () => {
    value === defaultValue ? setValue('') : null
  }
  const changeHandler = (e) => {
    setValue(e.target.value)
  }
  const blurHandler = () => {
    !value ? setValue(defaultValue) : null
  }
  const submitHandler = () => {
    console.log('submit')
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errorDom.current.classList.remove('hide')
    } else  {
      const formData = {email: value}
      axios.post('https://www.antpay.cool/newsletter_subscribe/', formData) // 'http://www.antpay.local/newsletter_subscribe/' "http://localhost:5000/antpay/subscribe"
        .then(response => {
          console.log('res:', response)
          dom.current.classList.add('successful')
        })
        .catch(error => {
          console.error('error:', error)
        })
    }
  }

  useEffect(() => {
    errorDom.current.onclick = function() {
      errorDom.current.classList.add('hide')
      document.getElementById("subscribeInput").focus()
    }
  }, [])

  return (
    <Root 
      ref={dom}
      {...props}
    >
      <LogoAquaGradient className='logo' />
      <Box className="form">
        <Box className="inputWrapper">
          <InputBase 
            id='subscribeInput'
            className="input" 
            value={value}
            onFocus={focusHandler}
            onChange={(e) => {changeHandler(e)}}
            onBlur={blurHandler}
          />
          <Box 
            ref={errorDom} 
            className="error hide"
          >
            <Typography className="text">
              Invalid email
            </Typography>
          </Box>
          <Box 
            className="successText"
          >
            <Typography className="text">
              Thank you for subscribing to our newsletter.
            </Typography>
          </Box>
        </Box>
        <Button 
          className="submit"
          onClick={() => submitHandler()}
        >
          <SendIcon style={{ width: 21.3, marginRight: 1.8 }} />
        </Button>
      </Box>
    </Root>
  )
}