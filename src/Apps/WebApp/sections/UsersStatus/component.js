import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  padding: 12,
  '& > .wrapper': {
    padding: '8px 12px',
    paddingRight: 0,
    '& .slider': {
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '& > .wrapper': {
        '& > *': {
          margin: '0 4px'
        },
        display: 'flex',
        alignItems: 'center'
      },
      '::-webkit-scrollbar': {
        height: '28px'
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.light,
        border: '11px solid rgba(255, 255, 255, 0)'
      },
      '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#d7a9ff'
      }
    }
  }
}))



export { Root }