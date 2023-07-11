import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  position: 'fixed',
  bottom: '10%',
  right: 32,
  borderRadius: '50%',
  width: 42,
  height: 42,
  cursor: 'pointer',
  '& > .wrapper': {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& .roomUnreadMessagesCount': {
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      width: 22,
      height: 22,
      top: '0%',
      right: '0%',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'translate(25%, -25%)',
      '& .text': {
        color: '#fff',
        fontSize: 10,
        fontWeight: 600
      }
    }
  }
}))



export { 
  Root
}