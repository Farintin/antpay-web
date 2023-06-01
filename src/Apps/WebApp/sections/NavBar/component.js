import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  padding: 12,
  // borderWidth: 0,
  // borderRightWidth: 1,
  // borderColor: '#aaa',
  // borderStyle: 'solid',
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
              // backgroundColor: theme.palette.primary.lighter,
              borderRadius: 8,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '& .icon': {
                width: 22,
                '&.menulist': {
                  width: 7.5
                }
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