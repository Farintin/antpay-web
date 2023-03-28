import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  height: '100%',
  borderRadius: '42px 42px 0 0',
  '& > .wrapper': {
    height: '100%',
    padding: 24,
    paddingTop: 42,
    paddingRight: 32,
    '& > .row': {
      '&.row-1': {
        height: 32,
        paddingLeft: 16,
        paddingRight: 24,
        '& .text': {
          textTransform: 'capitalize',
          color: theme.palette.primary.light
        }
      },
      '&.row-2': {
        marginTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
        height: 'calc(100% - 32px)',
        overflow: 'overlay',
        '::-webkit-scrollbar': {
          width: '8px'
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.primary.light,
          border: '0px solid rgba(255, 255, 255, 0)'
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#d7a9ff'
        }
      }
    }
  },
  '& .text': {
    fontSize: 16,
    fontWeight: 500
  }
}))



export { Root }