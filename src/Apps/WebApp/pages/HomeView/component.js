import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#6E01CE',// theme.palette.primary.light,
  '& > .wrapper': {
    width: '100%',
    height: '100%',
    '& > .grid': {
      height: '100%',
      '& > .col': {
        height: '100%',
        '&.col-1': {
          height: '100%',
          '& > .wrapper': {
            width: '30vw',
            minWidth: 400,
            maxWidth: 450,
            height: '100%',
            borderWidth: 0,
            borderRightWidth: 1,
            borderColor: '#ccc',
            borderStyle: 'solid',
            '& > .stack': {
              '& > .row-1': {
                height: 250,
              },
              '& > .row-2': {
                height: 'calc(100vh - 250px)'
              }
            }
          }
        },
        '&.col-3': {
          height: '100%',
          '& > .wrapper': {
            height: '100%'
          }
        }
      }
    }
  }
}))



export { Root }