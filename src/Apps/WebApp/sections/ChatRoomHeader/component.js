import Box from "@mui/material/Box"
import { alpha, styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  padding: 12,
  backgroundColor: theme.palette.primary.main,
  '& > .wrapper': {
    '& > .grid': {
      '& > .col': {
        display: 'flex',
        alignItems: 'center',
        '&.col-1': {
          '& > *': {
            margin: '0 5px'
          },
          '& .text': {
            '&.username': {
              color: '#fff',
              fontSize: 18,
              fontWeight: 600
            }
          }
        },
        '&.col-2': {
          justifyContent: 'flex-end',
          '& > *': {
            margin: '0 4px'
          },
          '& > .stack': {
            '& > *': {
              margin: '0 2px'
            },
            '& .iconButton': {
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
                width: 22
              },
              '&:hover': {
                backgroundColor: alpha('#000', .12)
              }
            }
          }
        }
      }
    }
  }
}))



export { Root }