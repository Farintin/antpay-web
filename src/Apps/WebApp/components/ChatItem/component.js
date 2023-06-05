import Box from "@mui/material/Box"
import { alpha, styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  padding: '16px 0',
  borderWidth: '0 0 1px 0',
  borderStyle: 'solid',
  borderColor: alpha('#000', .18), 
  cursor: 'pointer',
  '& > .wrapper': {
    '& > .grid': {
      '& > .col': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& .text': {
          fontSize: 11.4,
          fontWeight: 500,
          color: '#000',
          lineHeight: '108%',
          '&.bold': {
            fontWeight: 700
          },
          '&.name': {
            fontSize: 18,
            textTransform: 'capitalize'
          },
          '&.time': {
            fontSize: 13.5,
            fontWeight: 700,
            textTransform: 'uppercase'
          }
        },
        '& .n': {
          width: 18,
          height: 18,
          backgroundColor: theme.palette.primary.main,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& .text': {
            fontSize: 9.6,
            fontWeight: 600,
            color: '#fff'
          },
          '&.hide': {
            opacity: 0
          }
        },
        '&.col-1': {
        },
        '&.col-2': {
          '& > *': {
            margin: 2
          }
        },
        '&.col-3': {
          alignItems: 'flex-end',
          '& > *': {
            margin: 2
          }
        }
      }
    }
  }
}))



export { Root }