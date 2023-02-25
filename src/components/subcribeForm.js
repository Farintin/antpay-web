import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import styled from "@mui/material/styles/styled"



const Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: 64,
    '& .input': {
      width: 480,
      height: '100%',
      backgroundColor: '#fff',
      padding: '0 32px',
      fontSize: 15,
      fontWeight: 600,
      color: 'rgba(14, 14, 14, .45)'
    },
    '& .submit': {
      width: 180,
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '0 8px 8px 0',
      fontSize: 20,
      fontWeight: 700,
      color: '#fff',
      textTransform: 'uppercase',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    }
}))



export default function ({ style, ...others }) {
  const defaultValue = 'Your email'
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
    <Root style={style} {...others} >
      <InputBase 
        className="input" 
        value={value}
        onFocus={focusHandler}
        onChange={(e) => {changeHandler(e)}}
        onBlur={blurHandler}
      />
      <Button 
        className="submit"
      >
        Subscribe
      </Button>
    </Root>
  )
}