import { useRef, useState } from "react"
import axios from "axios"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from "@mui/material/styles"
import { LogoAquaGradient } from "./Logo"
import { SendIcon } from "./icon"



const Root = styled(Box)(({ theme }) => ({
  paddingTop: 24,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .logo': {
    width: 'auto',
    margin: 12,
    '& img': {
      width: 63
    }
  },
  '& .form': {
    '--h': '48px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    '& .inputWrapper': {
      width: '100%',
      height: 'calc(var(--h) - 3px)',
      backgroundColor: theme.palette.secondary.dark,
      borderRadius: 64,
      border: '3px solid',
      borderColor: alpha('#fff', .45),
      position: 'relative',
      transition: 'all .3s ease',
      '& .input': {
        width: '100%',
        height: '100%',
        padding: '0 24px',
        fontSize: 15,
        fontWeight: 700,
        color: 'rgba(0, 0, 0, .69)'
      },
      '& .errorContainer': {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        borderRadius: 64,
        padding: '0 24px',
        border: '3px solid',
        borderColor: alpha('#000', 0),
        display: 'none',
        alignItems: 'center',
        justifyContent: 'flex-end',
        cursor: 'text',
        '& .text': {
          color: 'rgba(255, 0, 0, .75)',
          fontSize: 14,
          fontWeight: 500
        }
      },
      '& .successText': {
        width: '100%',
        height: '100%',
        padding: '24px 24px',
        borderRadius: 64,
        display: 'none',
        alignItems: 'center',
        opacity: 0,
        // transition: 'all 4s ease',
        '& .text': {
          color: '#6fffdf',
          fontSize: 0,
          fontWeight: 500
        }
      },
    },
    '& .submit': {
      minWidth: 'auto',
      width: '100%',
      backgroundColor: theme.palette.primary.lighter,
      borderRadius: 42,
      fontSize: 20,
      fontWeight: 700,
      color: '#fff',
      textTransform: 'uppercase',
      marginTop: 16,
      padding: '16px 0',
      boxSizing: 'content-box',
      '&:hover': {
        backgroundColor: '#fff',
        '& .icon': {
          fill: theme.palette.primary.lighter,
          width: 22.5
        }
      }
    }
  },
  '&.error': {
    '& .form': {
      '& .inputWrapper': {
        borderColor: alpha('#f00', .69),
        '& .errorContainer': {
          display: 'flex'
        }
      }
    }
  },
  '&.successful': {
    '& .form': {
      '& .inputWrapper': {
        borderRadius: 24,
        backgroundColor: theme.palette.primary.lighter,
        height: 'auto',
        '& .input': {
          display: 'none'
        },
        '& .successText': {
          display: 'flex',
          opacity: 1,
          '& .text': {
            fontSize: 19.5
          }
        }
      },
      '& .submit': {
        marginTop: 0,
        width: 0,
        height: 0,
        '& .icon': {
          width: '0px'
        }
      }
    }
  }
}))



export default function ({ ...props }) {
  const dom = useRef(null)
  const inputDom = useRef(null)
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
      dom.current.classList.add('error')
    } else  {
      const formData = {email: value}
      axios.post('https://www.antpay.cool/newsletter_subscribe/', formData)
        .then(response => {
          console.log('res:', response)
          dom.current.classList.add('successful')
        })
        .catch(error => {
          console.error('error:', error)
        })
      }
  }
  const errorDomClickHandler = () => {
    dom.current.classList.remove('error')
    document.getElementById("subscribeInput").focus()
  }

  return (
    <Root
      ref={dom}
      {...props}>
      <LogoAquaGradient 
        className='logo' 
      />
      <Box className="form">
        
        <Box className="inputWrapper">
          <InputBase 
            ref={inputDom}
            id='subscribeInput'
            className="input" 
            value={value}
            onFocus={focusHandler}
            onChange={(e) => {changeHandler(e)}}
            onBlur={blurHandler}
          />
          <Box
            className="errorContainer"
            onClick={errorDomClickHandler}
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