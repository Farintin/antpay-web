import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"

import Button from "../../components/Button"



const Root = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#6E01CE',// theme.palette.primary.light,
  '& > .wrapper': {
    width: '100%',
    height: '100%',
    position: 'relative',
    '& > .grid': {
      height: '100%',
      '& > .col': {
        height: '100%',
        '&.col-1': {
          height: '100%',
          position: 'relative',
          '& > .wrapper': {
            width: '30vw',
            minWidth: 400,
            maxWidth: 450,
            height: '100%',
            borderWidth: 0,
            borderRightWidth: 1,
            borderColor: '#ccc',
            borderStyle: 'solid',
            position: 'relative'
          },
          '& .bottomNotification': {
            position: 'fixed',
            bottom: '0%',
            left: 0,
            width: '30vw',
            minWidth: 400,
            maxWidth: 450,
            height: 'fit-content',
            opacity: 1,
            transition: '* .4s ease-in-out, opacity .6s ease-in-out',
            '& > .wrapper': {
              width: '100%',
              height: '100%',
              padding: '22.5px 16px',
              display: 'flex',
              alignItems: 'center',
              '& .text': {
                fontSize: 12.9,
                fontWeight: 400,
                textAlign: 'left',
                color: '#fff',
                lineHeight: 1
              }
            },
            '&.message': {
              backgroundColor: alpha('#333', 1)
            },
            '&.error': {
              backgroundColor: alpha('#700', 1)
            },
            '&.hide': {
              top: '100%',
              opacity: 1
            }
          }
        },
        '&.col-3': {
          height: '100%',
          '& > .wrapper': {
            height: '100%'
          }
        }
      }
    },
    '& .logoutModal': {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: alpha('#000', .57),
      width: '100%',
      height: '100%',
      '& .wrapper': {
        borderRadius: 24,
        backgroundColor: theme.palette.primary.main,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        width: 500,
        opacity: 0,
        transform: 'scale(0)',
        '& > .info': {
          margin: 16,
          '& > .text': {
            fontSize: 15,
            fontWeight: 300,
            color: '#fff',
            lineHeight: '120%',
            '&.heading': {
              fontSize: 27,
              fontWeight: 500
            }
          }
        },
        '& .buttons': {
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 24,
          '& .button': {
            margin: 8
          }
        }
      },
      '&.show': {
        transform: 'scale(1)',
        '& > .wrapper': {
          opacity: 1,
          transform: 'scale(1)',
          transition: `
            transform .2s ease-in-out,
            opacity .4s ease-in-out`,
        }
      },
      '&.hide': {
        transform: 'scale(0)',
        transition: `
          transform 0s ease-in-out .4s`,
        '& > .wrapper': {
          opacity: 0,
          transform: 'scale(0)',
          transition: `
            transform .4s ease-in-out,
            opacity .4s ease-in-out`
        }
      }
    }
  }
}))

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '15px 12px',
  backgroundColor: theme.palette.secondary.lighter,
  '& .label': {
    fontSize: 15,
    fontWeight: 600,
    color: theme.palette.primary.main
  },
  '&.cancel': {
    backgroundColor: theme.palette.primary.lighter,
    // boxShadow: '0px 4px 12px rgba(0,0,0,.25)',
    '& .label': {
      color: '#fff'// theme.palette.secondary.light
    }
  },
  '&:hover': {
    backgroundColor: '#fff',
    boxShadow: '0px 4px 12px rgba(0,0,0,.25)',
    '& .label': {
      color: theme.palette.primary.main
    }
  },
  '&.hide': {
    display: 'none'
  }
}))



export { Root, StyledButton }