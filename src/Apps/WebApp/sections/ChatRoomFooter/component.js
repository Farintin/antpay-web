import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  padding: '8px 0',
  position: 'absolute',
  bottom: 0,
  width: '98%',
  '& > .wrapper': {
    '& > .stack': {
      alignItems: 'flex-end',
      '& > *': {
        margin: '0 4px'
      },
      '& .iconButton': {
        '--icon-w': '15px',
        marginBottom: 3,
        width: 32,
        height: 32,
        borderRadius: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxSizing: 'content-box',
        padding: 4,
        '& .icon': {
          width: 'var(--icon-w)'
        },
        '&:hover': {
          backgroundColor: alpha('#000', .6)
        }
      }
    }
  }
}))



export { Root }