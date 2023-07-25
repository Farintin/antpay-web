import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  '--borderColor': '#ADFFE1',
  width: 45,
  height: 45,
  borderRadius: '50%',
  // boxShadow: `0px 0px 1px 3px var(--borderColor)`,
  borderStyle: 'solid',
  borderColor: 'var(--borderColor)',
  borderWidth: 2,
  padding: 2,
  boxSizing: 'content-box',
  '& > .wrapper': {
    width: 'inherit',
    height: 'inherit',
    borderRadius: 'inherit',
    backgroundColor: '#D9D9D9',
    '& img': {
      width: 'inherit',
      height: 'inherit',
      borderRadius: 'inherit',
      objectFit: 'cover',
      objectPosition: 'center'
    }
  }
}))



export { 
  Root
}