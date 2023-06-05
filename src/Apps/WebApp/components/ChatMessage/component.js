import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  display: 'flex',
  '& .main': {
    maxWidth: '69%',
    '& .msgBox': {
      borderRadius: 18,
      padding: '12px 21px',
      '& .text': {
        color: '#22003D',
        fontSize: 14.5,
        fontWeight: 600,
        lineHeight: '19.5px'
      }
    },
    '& .info': {
      padding: '4px 0',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      lineHeight: '75%',
      '& .time': {
        color: '#fff',
        fontSize: 10.5,
        fontWeight: 300,
        letterSpacing: '1.5px'
      },
      '& .reciept': {
        color: '#0ff',
        fontSize: 10.8,
        fontWeight: 400,
        paddingLeft: 2
      }
    }
  },
  '&.host': {
    justifyContent: 'flex-end',
    '& .main': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      '& .msgBox': {
        borderBottomRightRadius: 0,
        backgroundColor: '#D4A3FF'
      }
    }
  },
  '&.guest': {
    '& .main': {
      '& .msgBox': {
        borderBottomLeftRadius: 0,
        backgroundColor: '#ADFFE1'
      }
    }
  }
}))



export { 
  Root
}