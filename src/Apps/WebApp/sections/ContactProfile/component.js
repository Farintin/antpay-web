import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"

import Button from "../../components/Button"



const Root = styled(Box)(({ theme }) => ({
  width: '33vw',
  minWidth: 400,
  maxWidth: 480,
  height: '100%',
  borderWidth: 0,
  borderLeftWidth: 1,
  borderColor: '#ccc',
  borderStyle: 'solid',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  '& > .grid-stack': {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'minmax(min-content, max-content) auto minmax(0%, auto)',
    '& > .row': {
      '&.row-1': {
        '& .nav': {
          padding: 16
        }
      },
      '&.row-2': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > .wrapper': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '60%',
          '& > *': {
            margin: 7
          },
          '& .text': {
            color: '#fff',
            fontSize: 15,
            fontWeight: 400,
            lineHeight: '100%',
            letterSpacing: '.2px',
            '&.username': {
              fontSize: 21,
              fontWeight: 600,
              textTransform: 'capitalize',
              letterSpacing: '.5px',
              lineHeight: '120%'
            }
          },
          '& .iconButtons': {
            display : 'flex',
            alignItems: 'center',
            '& > *': {
              margin: 10.5
            },
            '& .iconButton': {
              borderRadius: 32,
              borderColor: '#fff',
              borderStyle: 'solid',
              borderWidth: 2,
              padding: 4,
              '& .icon': {
                width: 15
              }
            }
          }
        }
      },
      '&.row-3': {
        display: 'flex',
        alignItems: 'flex-end',
        '& > .wrapper': {
          backgroundColor: '#fff',
          borderRadius: '42px 42px 0 0',
          width: '100%',
          height: '100%',
          padding: '64px 0px 16px',
          '& .listMenu': {
            '& .listItem': {
              padding: '0px 48px',
              '& .wrapper': {
                borderColor: alpha('#000', .12),
                borderStyle: 'solid',
                borderWidth: '0 0 1px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px 8px',
                // marginBottom: 12,
                cursor: 'pointer',
                '& .label': {
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#000',
                  lineHeight: '75%',
                  textTransform: 'capitalize'
                },
                '& .icon': {
                  width: 7,
                  strokeWidth: 2,
                  fill: theme.palette.primary.main
                }
              },
              '&:hover': {
                backgroundColor: alpha('#000', .09)
              }
            }
          }
        }
      }
    },
    '& .iconButton': {
      width: 28,
      height: 28,
      borderRadius: 32,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      boxSizing: 'content-box',
      padding: 4,
      '& .icon': {
        width: 9
      },
      '&:hover': {
        backgroundColor: alpha('#000', .12)
      }
    },
    '& .textButton': {
      cursor: 'pointer',
      boxSizing: 'content-box',
      padding: 14,
      lineHeight: '75%',
      fontSize: 14.4,
      fontWeight: 500,
      letterSpacing: '.2px',
      color: '#ADFFE1',
      textTransform: 'capitalize',
      '&:hover': {
        color: '#fff'
      }
    }
  },
  '& .addContactModal': {
    position: 'absolute',
    top: 0,
    marginTop: '16.5%',
    borderRadius: 16,
    backgroundColor: '#fff',
    boxShadow: '0px 12px 24px rgba(0,0,0,.24)',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    maxWidth: 300,
    '& > *': {
      // margin: 16
    },
    '& > .text': {
      fontSize: 19.5,
      fontWeight: 600,
      color: '#545454',
      lineHeight: '120%',
      margin: 16
    },
    '& .buttons': {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 4,
      '& .button': {
        margin: 8
      }
    }
  },
  '& .loadingModal': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: alpha('#fff', .72),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 2px',
  '& .label': {
    fontSize: 13.5,
    fontWeight: 600,
    color: theme.palette.secondary.lighter
  },
  '&:hover': {
    boxShadow: '0px 4px 12px rgba(0,0,0,.25)'
  },
  '&.hide': {
    display: 'none'
  }
}))



export { Root, StyledButton }