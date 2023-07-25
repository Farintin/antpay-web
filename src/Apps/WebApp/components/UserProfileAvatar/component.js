import { Box } from "@mui/material"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  '--borderColor': alpha(theme.palette.primary.main, .78),
  width: 51,
  height: 51,
  borderRadius: '50%',
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
    '& .editButton': {
      width: '15%',
      height: '15%',
      borderRadius: 'inherit',
      position: 'absolute',
      top: '87%',
      left: '84%',
      transform: 'translate(-50%,-50%)',
      '& > .wrapper': {
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        '& label': {
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: 'pointer'
        },
        '& .iconButton': {
          width: '100%',
          height: '100%',
          backgroundColor: '#ADFFE1',
          borderRadius: 'inherit',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
          '& .icon': {
            width: 13.5
          }
        }
      },
      '&:hover': {
        '& .iconButton': {
          backgroundColor: theme.palette.primary.lighter,
          '& svg': {
            stroke: theme.palette.secondary.lighter,
            strokeWidth: 2
          }
        }
      }
    }
  }
}))



export { 
  Root
}