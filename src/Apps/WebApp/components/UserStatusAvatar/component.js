import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  height: '100%',
  margin: '0 10.5px!important',
  '& > .wrapper': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .avatar': {
      width: 81,
      height: 81,
      position: 'relative',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
      '& > img': {
        width: 'inherit',
        height: 'inherit',
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