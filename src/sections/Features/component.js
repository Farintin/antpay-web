import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import MuiButton from '../../components/MuiButton'



const Root = styled(Box)(() => ({
  background: `linear-gradient(360deg, #22003D -180%, #ADFFE1 240%)`,
  padding: '64px 0',
  '& .wrapper': {
    '& .heading': {
      fontSize: 40,
      fontWeight: 700,
      color: '#fff',
      textTransform:' uppercase',
      lineHeight: '75%',
      margin: '32px 0',
      textAlign: 'center'
    }
  }
}))

const Features = styled(Grid)(({ theme }) => ({
  margin: '32px 0',
  width: '100%',
  '& .MuiGrid-item': {
    display: 'flex',
    flexDirection: 'column',
    '& .sub-heading': {
      position: 'relative',
      height: 32,
      '& .text': {
        position: 'absolute',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: '120%',
        color: '#fff',
        textTransform: 'uppercase',
        paddingRight: '40%'
      }
    },
    '& .article': {
      marginTop: 32,
      padding: '0 64px 16px 0',
      borderStyle: 'solid',
      borderColor: '#fff',
      borderWidth: '0 1px 0 0', 
      flexGrow: 1,
      '& .image': {
        width: 78,
        height: 78,
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .icon': {
          width: '50%'
        }
      },
      '& .text': {
        marginTop: 16,
        fontSize: 14.5,
        fontWeight: 400,
        lineHeight: '135%',
        color: '#fff'
      }
    },
    '&:last-of-type': {
      '& .article': {
        borderRightWidth: 0
      }
    }
  }
}))

const Button = styled(MuiButton)(() => ({
  // padding: '20px 34px',
  '& .label': {
    fontSize: 16,
    fontWeight: 600
  }
}))

const Download = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& > *': {
    margin: 24
  },
  '& .text': {
    fontSize: 20,
    fontWeight: 700,
    color: '#fff'
  }
}))

export { Root, Features, Download, Button }