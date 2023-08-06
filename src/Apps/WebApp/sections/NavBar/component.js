import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  padding: 12,
  '& > .wrapper': {
    '& > .grid': {
      '& > .col': {
        display: 'flex',
        alignItems: 'center',
        '&.col-1': {
          '& > *': {
            margin: '0 4px'
          },
          '& > .stack': {
            '& > *': {
              margin: '0 2px'
            },
            '& .iconButton': {
              width: 32,
              height: 32,
              borderRadius: 32,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              boxSizing: 'content-box',
              padding: 4,
              position: 'relative',
              '& .icon': {
                width: 22,
                '&.search': {
                  width: 20
                }
              },
              '&:hover': {
                backgroundColor: alpha('#000', .12)
              },
              '& .dropdown': {
                position: 'absolute',
                top: '50%',
                left: '50%',
                flexDirection: 'column',
                backgroundColor: theme.palette.primary.light,
                margin: '8px 4px',
                padding: '8px 0',
                borderRadius: 9,
                zIndex: 1,
                boxShadow: `0px 12px 24px rgb(0 0 0 / 30%)`,
                display: 'flex',
                width: 'max-content',
                minWidth: 200,
                opacity: 0,
                transform: 'scale(0)',
                transformOrigin: 'top left',
                transition: `
                  top .2s ease-in-out,
                  left .2s ease-in-out,
                  transform .2s ease-in-out,
                  opacity .4s ease-in-out`,
                cursor: 'default',
                '& .item': {
                  padding: '12px 24px',
                  fontSize: 'inherit',
                  cursor: 'pointer',
                  '& .label': {
                    textTransform: 'capitalize',
                    fontSize: 15,
                    lineHeight: '100%',
                    color: alpha('#fff', 1)
                  },
                  '&:hover': {
                    backgroundColor: alpha('#fff', 1),
                    '& .label': {
                      color: theme.palette.primary.main,
                      fontWeight: 500
                    }
                  }
                }
              },
              '&.focus': {
                backgroundColor: alpha('#000', .12),
                '& .dropdown': {
                  top: '100%',
                  left: 0,
                  opacity: 1,
                  transform: 'scale(1)',
                  '& .item': {
                    '& .label': {
                    }
                  }
                }
              }
            }
          }
        },
        '&.col-2': {
          '& > *': {
            margin: '0 4px'
          }
        }
      }
    }
  }
}))



export { Root }