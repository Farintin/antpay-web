import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  '--borderColor': '#ADFFE1',
  width: 51,
  height: 51,
  borderRadius: '50%',
  // boxShadow: `0px 0px 1px 4px var(--borderColor)`,
  border: '3px solid var(--borderColor)',
  '& > .wrapper': {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    backgroundColor: '#D9D9D9',
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      objectFit: 'cover',
      objectPosition: 'center'
    },
    '& .statusAvatar': {
      width: '20%',
      height: '20%',
      borderRadius: 'inherit',
      position: 'absolute',
      top: '85%',
      left: '85%',
      transform: 'translate(-50%,-50%)',
      border: '2px dashed var(--borderColor)',
      padding: 3,
      '& > .wrapper': {
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        border: '2px solid var(--borderColor)'
      }
    }
  }
}))



export { 
  Root
}