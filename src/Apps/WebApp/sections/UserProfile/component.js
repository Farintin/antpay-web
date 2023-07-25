import Box from "@mui/material/Box"
// eslint-disable-next-line
import { styled, alpha } from "@mui/material/styles"

import Button from "../../components/Button"





const Root = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to bottom, ${alpha('#fff', 1)} -30%, ${alpha(theme.palette.primary.lighter, 1)} 165%)`,
  width: '100%',
  height: '100%',
  top: 0,
  left: '-100%',
  opacity: 0,
  transition: 'left .1s ease-in-out, opacity .2s ease-in-out',
  overflow: 'overlay',
  '.grid-stack': {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'minmax(min-content, max-content) auto auto',
    '& > .row': {
      '&.row-1': {
        '& .grid': {
          '& > .col': {
            display: 'flex',
            alignItems: 'center',
            padding: 8,
            '&.col-1': {
              justifyContent: 'flex-dtart'
            },
            '&.col-2': {
              justifyContent: 'center'
            },
            '&.col-3': {
              justifyContent: 'flex-end'
            }
          }
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
            margin: 4
          }
        }
      },
      '&.row-3': {
        display: 'flex',
        alignItems: 'flex-end',
        '& > .wrapper': {
          width: '100%',
          height: '100%',
          padding: '8px 54px',
          '& .listMenu': {
            '& .listItem': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '19.5px 28px 19.5px 24px',
              margin: '8px 0',
              backgroundColor: alpha('#fff', .75),
              borderRadius: 12,
              cursor: 'pointer',
              '& .label': {
                fontSize: 15,
                fontWeight: 700,
                color: theme.palette.primary.main,
                lineHeight: '75%',
                textTransform: 'capitalize'
              },
              '& .icon': {
                width: 7,
                fill: theme.palette.primary.main
              },
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.light, 1),
                '& .label': {
                  color: '#fff'
                },
                '& .icon': {
                  fill: '#fff'
                },
              }
            }
          }
        }
      }
    }
  },
  '&.open': {
    left: '0%',
    opacity: 1
  },
  '& .text': {
    fontSize: 15,
    fontWeight: 400,
    color: '#000',
    lineHeight: '100%',
    letterSpacing: '.2px',
    '&.heading': {
      fontSize: 18,
      fontWeight: 700,
      textTransform: 'capitalize',
      letterSpacing: '0px'
    },
    '&.username': {
      fontSize: 24,
      fontWeight: 700,
      color: theme.palette.primary.main,
      textTransform: 'capitalize'
    },
    '&.status': {
      fontSize: 12,
      fontWeight: 500,
      color: theme.palette.primary.main
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
    fontSize: 13.5,
    fontWeight: 500,
    letterSpacing: '.2px',
    textTransform: 'capitalize',
    '&:hover': {
      color: theme.palette.primary.main
    }
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