import Box from "@mui/material/Box"
import { alpha, styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  background: `linear-gradient(to bottom, #57607b 30%, #413861 90%)`,
  padding: '64px 0 0'
}))

const Subscribe = styled(Box)(() => ({
  '--w': 'calc(210vw)',
  width: '100%',
  height: 'var(--w)',
  margin: '64px auto',
  position: 'relative',
  '& .wrapper.one': {
    width: 'var(--w)',
    height: 'var(--w)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '6px solid #fff',
    position: 'absolute',
    transform: 'translateX(calc(-60vw + 3px))',
    '& .wrapper.two': {
      padding: '0 16px 24px',
      width: '90vw',
      borderRadius: 36,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '6px solid #fff',
      '& > *': {
        margin: '8px 0'
      },
      '& .knot': {
        width: '30%',
        height: 24,
        backgroundColor: '#fff',
        borderRadius: '0 0 32px 32px',
        margin: 0,
        marginTop: -1
      },
      '& .text': {
        lineHeight: '135%',
        fontSize: 12,
        fontWeight: 600,
        color: '#fff',
        textAlign: 'center',
        padding: '0 5%'
      },
      '& .heading': {
        fontSize: 28,
        fontWeight: 700,
        marginTop: 32
      }
    }
  }
}))

const Main = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .cell': {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 48,
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    '& > *': {
      margin: '32px 0'
    },
    '& .stayInTouch': {
      lineHeight: '100%',
      fontSize: 48,
      fontWeight: 900,
      fontFamily: '"Grandstander", cursive',
      textAlign: 'center',
      textTransform: 'capitalize',
      color: theme.palette.primary.main,
      marginTop: 24,
    },
    '& .info': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '16px 0',
      padding: '0 12%',
      '& .text': {
        lineHeight: '150%',
        fontSize: 15,
        fontWeight: 600
      },
      '& .heading': {
        backgroundColor: theme.palette.secondary.darker,
        padding: 6,
        borderRadius: 16,
        width: 'fit-content',
        '& .text': {
          lineHeight: '75%',
          fontSize: 15,
          fontWeight: 800,
          '&:first-letter': {
            textTransform: 'capitalize'
          }
        }
      },
      '& .article': {
        marginTop: 4,
        '& .text': {
          color: alpha('#000', .78),
          textAlign: 'center'
        }
      }
    },
    '& .socialMedia': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 48,
      marginBottom: 15,
      '& .item': {
        margin: 10,
        '& .link': {
          display: 'flex',
          '& svg.icon': {
            fill: theme.palette.primary.light,
            width: 30,
            '& path': {
              stroke: '#fff',
              strokeWidth: 1
            },
            '&.facebook': {
              '& path': {
                stroke: theme.palette.primary.light
              }
            },
            '&.twitter': {
              width: 58.5,
              marginLeft: 4,
              '& path': {
                strokeWidth: 1
              }
            },
            '&.instagram': {
              width: 54,
              '& path': {
                strokeWidth: 3.6,
                '&.dot': {
                  strokeWidth: 4.8
                }
              }
            }
          },
          '&:hover': {
            '& svg.icon': {
              fill: theme.palette.secondary.darker,
              '& path': {
                stoke: theme.palette.secondary.darker,
              },
              '&.facebook.important': {
                stoke: theme.palette.secondary.darker,
                '& path': {
                  stoke: theme.palette.secondary.darker,
                  strokeWidth: 0
                }
              }
            }
          }
        }
      }
    }
  },
  '& .copyright': {
    color: '#fff',
    fontWeight: 300,
    fontSize: 15,
    padding: 18,
    textAlign: 'center'
  }
}))



export { Root, Subscribe, Main }