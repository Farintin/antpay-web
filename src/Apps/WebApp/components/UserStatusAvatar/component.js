import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  '& > .wrapper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .avatar': {
      width: 81,
      height: 81,
      position: 'relative',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      '& > img': {
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        position: 'absolute',
        // bottom: '-3%',
        // left: '0%',
        bottom: '-12%',
        left: '-12%',
        objectFit: 'cover',
        objectPosition: 'center',
        // scale: '105% 105%'
      }
    },
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