import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  width: 51,
  height: 51,
  borderRadius: '50%',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: '#ADFFE1',
  padding: 2,
  '& > .wrapper': {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    backgroundColor: '#D9D9D9',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      scale: '101%',
      objectFit: 'cover',
      objectPosition: 'center'
    }
  }
}))



export { 
  Root
}