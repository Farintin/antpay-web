import Box from "@mui/material/Box"
import { alpha, styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  padding: '15px 0',
  borderWidth: '0 0 1px 0',
  borderStyle: 'solid',
  borderColor: alpha('#000', .18), 
  cursor: 'pointer',
  '& > .wrapper': {
    '& > .grid': {
      '& > .col': {
        '&.col-1': {
        },
        '&.col-2': {
          display: 'flex',
          alignItems: 'center',
          '& > .grid': {
            '& .col': {
              display: 'flex',
              alignItems: 'center',
              padding: '3px 0',
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
                },
                '&.time': {
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  '&.fs-lg': {
                    fontSize: 14.4
                  },
                  '&.fs-sm': {
                    fontSize: 11.7,
                    fontWeight: 700
                  }
                }
              },
              '& .n': {
                width: 18,
                height: 18,
                backgroundColor: theme.palette.primary.main,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& .text': {
                  fontSize: 10.5,
                  fontWeight: 500,
                  lineHeight: '75%',
                  color: '#fff',
                  marginTop: 2,
                },
                '&.hide': {
                  opacity: 0
                }
              },
              '&.col-1': {
              },
              '&.col-2': {
                justifyContent: 'flex-end'
              },
              '&.col-3': {
                '& .tick': {
                  marginRight: 3,
                  display: 'flex',
                  marginBottom: 2
                }
              },
              '&.col-4': {
                justifyContent: 'flex-end',
                '& .n': {
                  width: 18,
                  height: 18,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '& .text': {
                    fontSize: 10.5,
                    fontWeight: 500,
                    lineHeight: '75%',
                    color: '#fff',
                    marginTop: 2,
                  },
                  '&.hide': {
                    opacity: 0
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}))



export { Root }