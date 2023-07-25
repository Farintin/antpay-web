import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



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
          position: 'relative',
          '& > .wrapper': {
            width: '30vw',
            minWidth: 400,
            maxWidth: 450,
            height: '100%',
            borderWidth: 0,
            borderRightWidth: 1,
            borderColor: '#ccc',
            borderStyle: 'solid',
            position: 'relative'
          },
          '& .bottomNotification': {
            position: 'fixed',
            bottom: '0%',
            left: 0,
            width: '30vw',
            minWidth: 400,
            maxWidth: 450,
            height: 'fit-content',
            opacity: 1,
            transition: '* .4s ease-in-out, opacity .6s ease-in-out',
            '& > .wrapper': {
              width: '100%',
              height: '100%',
              padding: '22.5px 16px',
              display: 'flex',
              alignItems: 'center',
              '& .text': {
                fontSize: 12.9,
                fontWeight: 400,
                textAlign: 'left',
                color: '#fff',
                lineHeight: 1
              }
            },
            '&.message': {
              backgroundColor: alpha('#333', 1)
            },
            '&.error': {
              backgroundColor: alpha('#700', 1)
            },
            '&.hide': {
              top: '100%',
              opacity: 1
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