import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  padding: 12,
  '& > .wrapper': {
    '& > .grid': {
      '& > .col': {
        display: 'flex',
        alignItems: 'center',
        '&.col-1': {
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
                width: 22,
                '&.search': {
                  width: 20
                }
              },
              '&:hover': {
                backgroundColor: alpha('#000', .12)
              }
            }
          }
        },
        '&.col-2': {
          '& > *': {
            margin: '0 4px'
          }
        }
      }
    }
  }
}))



export { Root }