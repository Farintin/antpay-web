import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  '& > .wrapper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .text': {
      color: '#fff',
      fontSize: 11.4,
      fontWeight: 300,
      marginTop: 4,
      textTransform: 'capitalize'
    }
  }
}))



export { 
  Root
}