import Grid from "@mui/material/Grid"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Grid)(() => ({
  display: 'grid',
  width: '33vw',
  minWidth: 400,
  maxWidth: 480,
  height: '100%',
  borderWidth: 0,
  borderLeftWidth: 1,
  borderColor: '#ccc',
  borderStyle: 'solid',
  gridTemplateColumns: '100%',
  gridTemplateRows: 'auto auto minmax(0%, auto)',
  '& > .row': {
    '&.row-1': {
      '& .nav': {
        padding: 16,
        '& .editButton': {
          cursor: 'pointer',
          boxSizing: 'content-box',
          padding: 14,
          lineHeight: '75%',
          fontSize: 14.4,
          fontWeight: 500,
          letterSpacing: '.2px',
          color: '#ADFFE1',
          '&:hover': {
            color: '#fff'
          }
        }
      }
    },
    '&.row-2': {
      '& > .wrapper': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: 6
        },
        '& .text': {
          color: '#fff',
          fontSize: 15,
          fontWeight: 400,
          lineHeight: '100%',
          letterSpacing: '.2px',
          '&.username': {
            fontSize: 19.5,
            fontWeight: 600,
            textTransform: 'capitalize',
            letterSpacing: '.5px'
          }
        },
        '&.phoneNumber': {
        }
      }
    },
    '&.row-3': {
      display: 'flex',
      alignItems: 'flex-end',
      '& > .wrapper': {
        backgroundColor: '#fff',
        borderRadius: '42px 42px 0 0',
        width: '100%',
        height: '180px'
      }
    }
  },
  '& .iconButton': {
    width: 28,
    height: 28,
    borderRadius: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxSizing: 'content-box',
    padding: 4,
    '& .icon': {
      width: 9
    },
    '&:hover': {
      backgroundColor: alpha('#000', .12)
    }
  }
}))



export { Root }