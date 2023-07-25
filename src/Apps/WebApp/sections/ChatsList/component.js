import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  height: '100%',
  borderRadius: '42px 42px 0 0',
  '& > .wrapper': {
    height: 'calc(100% - 8px)',
    padding: '42px 28px 0px',
    display: 'grid',
    gridTemplateRows: 'min-content auto',
    '& > .row': {
      '&.row-1': {
        padding: '0 16px',
        '& .text': {
          textTransform: 'capitalize',
          color: theme.palette.primary.light
        }
      },
      '&.row-2': {
        marginTop: 24,
        paddingLeft: 8,
        paddingRight: 4,
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
        },
        '& .chatItem': {
          '&:last-of-type': {
            '& > .wrapper': {
              borderWidth: 0
            }
          }
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