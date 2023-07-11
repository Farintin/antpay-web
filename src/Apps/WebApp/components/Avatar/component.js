import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  '--borderColor': '#ADFFE1',
  width: 51,
  height: 51,
  borderRadius: '50%',
  // boxShadow: `0px 0px 1px 3px var(--borderColor)`,
  borderStyle: 'solid',
  borderColor: 'var(--borderColor)',
  borderWidth: 2,
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
      objectFit: 'cover',
      objectPosition: 'center'
    }
  }
}))



export { 
  Root
}