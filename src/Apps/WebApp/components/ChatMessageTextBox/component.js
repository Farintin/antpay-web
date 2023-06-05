import { Box, InputBase } from "@mui/material"
import { styled, alpha } from "@mui/material/styles"





const Root = styled(Box)(() => ({
  '&.placeholder': {
    '& .MuiInputBase-root': {
      '& .MuiInputBase-input': {
        color: alpha('#000', .6),
        fontWeight: 500
      }
    }
  },
  '&.multiline': {
    '& .MuiInputBase-root': {
      borderRadius: 15,
      padding: '12px 18px'
    }
  }
}))

const Input = styled(InputBase)(() => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  borderRadius: 24,
  padding: '10px 24px',
  '& .MuiInputBase-input': {
    fontSize: 13.5,
    fontWeight: 600,
    color: '#000',
    letterSpacing: '.2px'
  },
  '& *': {
    padding: 0
  }
}))



export {
  Root,
  Input
}