import { useEffect, useRef, useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from "@mui/material/styles"
// import axios from 'axios'
import { LogoAquaGradient } from "./Logo"
import { SendIcon } from "./icon"



const Root = styled(Box)(({ theme }) => ({
  // margin: '72px 78% 0px 0px!important',
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
    '& .inputWrapper': {
      width: 480,
      height: 'calc(var(--h) - 3px)',
      position: 'relative',
      '& .input': {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: 64,
        padding: '0 24px',
        fontSize: 15,
        fontWeight: 700,
        color: 'rgba(0, 0, 0, .69)',
        border: '3px solid',
        borderColor: alpha('#fff', 0)
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
      }
    },
    '& .submit': {
      '--w': '48px',
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
  }
}))



export default function ({ ...props }) {
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
    // console.log('submit');
    /* if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errorDom.current.classList.remove('hide')
    } else  { */
      /* const data = {
          members: [
              {
                email_address: value,
                status: 'subscribed'
              }
          ]
      } */
      // const postData = JSON.stringify(data)
  
      /* fetch('https://us12.api.mailchimp.com/3.0/lists/<>', {
          method: 'POST',
          headers: {
            "Authorization": "auth <>"
          },
          body: postData
      })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log('err:', err)) */
      
      /* fetch('http://localhost:5000/antpay/subscribe', {
          method: 'POST',
          body: JSON.stringify({email: value})
      })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log('err:', err)) */

      /* axios.post('http://localhost:5000/antpay/subscribe', {
          email: value
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        }); */
    // }
  }

  useEffect(() => {
    errorDom.current.onclick = function() {
      errorDom.current.classList.add('hide')
      document.getElementById("subscribeInput").focus()
    }
  }, [])

  return (
    <Root {...props}>
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