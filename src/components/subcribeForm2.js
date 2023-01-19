import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from "@mui/material/styles"
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
    '& .input': {
      width: 480,
      height: 'calc(var(--h) - 3px)',
      backgroundColor: theme.palette.secondary.dark,
      borderRadius: 64,
      padding: '0 24px',
      fontSize: 15,
      fontWeight: 700,
      color: 'rgba(0, 0, 0, .69)',
      border: '3px solid',
      borderColor: alpha('#fff', 0)
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
      <LogoAquaGradient className='logo' />
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