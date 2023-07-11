import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  display: 'flex',
  // display: 'none',
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
      padding: '6px 0',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& .time': {
        display: 'flex',
        '& .text': {
          color: '#fff',
          fontSize: 10.5,
          fontWeight: 300,
          lineHeight: '100%',
          letterSpacing: '2px'
        }
      },
      '& .reciept': {
        display: 'flex',
        // color: '#0ff',
        // fontSize: 10.8,
        // fontWeight: 400,
        marginLeft: 2,
        paddingBottom: 2
      }
    }
  },
  '&.host': {
    justifyContent: 'flex-end',
    display: 'flex',
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
    display: 'flex',
    '& .main': {
      '& .msgBox': {
        borderBottomLeftRadius: 0,
        backgroundColor: '#ADFFE1'
      },
      '& .info': {
        '& .reciept': {
          display: 'none'
        }
      }
    }
  },
  '&:last-child': {
    marginBottom: 0
  }
}))



export { 
  Root
}