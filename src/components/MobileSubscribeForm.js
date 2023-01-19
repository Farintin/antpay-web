import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
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
    '& .input': {
      width: '100%',
      height: 'calc(var(--h) - 3px)',
      backgroundColor: theme.palette.secondary.dark,
      borderRadius: 64,
      padding: '0 24px',
      fontSize: 15,
      fontWeight: 700,
      color: 'rgba(0, 0, 0, .69)',
      border: '3px solid',
      borderColor: alpha('#fff', .45)
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
      marginTop: 6,
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
  }
}))



export default function ({ ...props }) {
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

  useEffect(() => {
  }, [])

  return (
    <Root {...props}>
      <LogoAquaGradient 
        className='logo' 
      />
      <Box className="form">
        <InputBase 
          className="input" 
          value={value}
          onFocus={focusHandler}
          onChange={(e) => {changeHandler(e)}}
          onBlur={blurHandler}
        />
        <Button className="submit">
          <SendIcon style={{ width: 21.3, marginRight: 1.8 }} />
        </Button>
      </Box>
    </Root>
  )
}