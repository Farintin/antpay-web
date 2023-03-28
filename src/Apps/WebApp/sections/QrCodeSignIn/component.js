import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  display: 'none',
  '& > .wrapper': {
    width: '80%',
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& > *': {
      margin: '8px auto'
    }
  },
  '&.active': {
    display: 'block'
  }
}))

const Main = styled(Box)(() => ({
  width: '100%',
  backgroundColor: alpha('#fff', 1),
  borderRadius: 18,
  boxShadow: '0px 24px 27px rgba(0,0,0,0.18)',
  '& > .wrapper': {
    '& .grid': {
      '& .col': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > .wrapper': {
          display: 'inherit',
          flexDirection: 'inherit',
          justifyContent: 'inherit',
          '& > *': {
            margin: '16px 0'
          },
          '& .heading': {
            fontWeight: 600,
            fontSize: 36,
            lineHeight: '144%',
            color: '#49b693'
          }
        },
        '&.col-2': {
          alignItems: 'center'
        }
      }
    }
  },
  '& .text': {
    fontWeight: 300,
    fontSize: 19.5,
    lineHeight: '150%',
    letterSpacing: '0px',
    color: '#000',
    '& .bold': {
      fontWeight: 300,
      borderStyle: 'solid',
      borderWidth: 3,
      borderColor: alpha('#49b693', .72),
      borderRadius: 8,
      padding: '0px 3px',
      lineHeight: '210%',
      fontSize: '90%'
    }
  },
  '& #QrCode': {
    width: '66%',
    margin: '15% auto 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&.load': {
      width: '100%',
      '& img': {
        display: 'none'
      }
    }
  }
}))

const List = styled('ul')(() => ({
  listStyle: 'decimal',
  paddingLeft: 24,
  '& .item': {
    margin: '16px 0',
    paddingLeft: 4
  }
}))



export { Root, Main, List }