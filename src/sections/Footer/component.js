import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { alpha, styled } from "@mui/material/styles"
// import MuiButton from '../../components/MuiButton'



const Root = styled(Box)(() => ({
  background: `linear-gradient(to bottom, #57607b 30%, #413861 90%)`,
  padding: '64px 0'
}))

const Subscribe = styled(Box)(() => ({
  width: '80%',
  margin: '0 auto',
  border: '2px solid #fff',
  padding: 48,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > *': {
    margin: '16px 0'
  },
  '& .text': {
    lineHeight: '75%',
    fontSize: 15,
    fontWeight: 600,
    color: '#fff'
  },
  '& .heading': {
    fontSize: 46,
    fontWeight: 700,
    marginTop: 'calc(-48px - 18px)',
    backgroundColor: '#57607b',
    padding: '0 8px'
  }
}))

const Main = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  width: '93%',
  '& .MuiGrid-item': {
    padding: '8px 48px',
    borderStyle: 'solid',
    borderColor: alpha('#fff', .5),
    borderWidth: '0 2px 0 0', 
    display: 'flex',
    flexDirection: 'column',
    '&:last-of-type': {
      borderRightWidth: 0
    },
    '& > *': {
      margin: '12px 0'
    },
    '& > *:first-child': {
      marginTop: 0
    },
    '& > *:last-child': {
      marginBottom: 0
    },
    '& .text': {
      lineHeight: '150%',
      fontSize: 15,
      fontWeight: 500,
      color: '#fff'
    },
    '& .heading': {
      fontSize: 20,
      fontWeight: 600,
      color: theme.palette.secondary.main
    },
    '& .logo': {
      width: '108%'
    },
    '& .socialMedia': {
      display: 'flex',
      alignItems: 'center',
      '& .item': {
        margin: '0 22px 0 0',
        '& .link': {
          display: 'flex',
          '&:hover': {
            '& svg.icon': {
              stroke: theme.palette.secondary.main,
              '& path': {
                stroke: theme.palette.secondary.main
              }
            }
          }
        }
      }
    },
    '& .address': {
      '& .text': {
        fontSize: 14,
        fontWeight: 400
      },
      '& .sub-heading': {
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 4
      }
    }
  }
}))

export { Root, Main, Subscribe }