import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  borderRadius: 42,
  backgroundColor: '#fff',
  padding: 42,
  marginTop: -165,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .heading': {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: '60px',
    color: theme.palette.primary.main
  },
  '& .steps': {
    '& .col': {
      display: 'flex',
      alignItems: 'center',
      padding: '18px 24px',
      borderStyle: 'solid',
      borderColor: alpha('#000', .84),
      borderWidth: '0 1px 0 0',
      '&:last-of-type': {
        borderRightWidth: 0
      },
      '& > .item': {
        margin: 8
      },
      '& .number': {
        '& .box': {
          width: 64,
          height: 64,
          backgroundColor: theme.palette.primary.main,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& .text': {
            color: '#fff',
            fontSize: 30,
            fontWeight: 700
          }
        }
      },
      '& .article': {
        '& .text': {
          color: '#000',
          fontSize: 15,
          fontWeight: 700,
          lineHeight: '22px'
        }
      }
    }
  }
}))



export { Root }