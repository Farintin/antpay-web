import Box from "@mui/material/Box"
import { alpha, styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  padding: '15px 8px 0',
  // margin: '0 0 15px',
  cursor: 'pointer',
  '& > .wrapper': {
    borderWidth: '0 0 1px 0',
    borderStyle: 'solid',
    borderColor: alpha('#000', .12), 
    paddingBottom: 15,
    '& > .grid': {
      '& > .col': {
        '&.col-1': {
        },
        '&.col-2': {
          display: 'flex',
          alignItems: 'center',
          '& > .grid': {
            '& .row': {
              display: 'flex',
              alignItems: 'center',
              padding: '3px 0',
              '&.row-1': {
              },
              '&.row-2': {
              }
            },
            '& .text': {
              fontSize: 12.6,
              fontWeight: 500,
              color: '#000',
              lineHeight: '100%',
              '&.bold': {
                fontWeight: 700
              },
              '&.name': {
                fontSize: 17,
                textTransform: 'capitalize'
              }
            }
          }
        }
      }
    }
  },
  '&:hover': {
    backgroundColor: alpha('#000', .042)
  }
}))



export { Root }