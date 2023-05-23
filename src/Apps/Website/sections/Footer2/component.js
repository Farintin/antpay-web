import Box from "@mui/material/Box"
import { alpha, styled } from "@mui/material/styles"



const Root = styled(Box)(() => ({
  background: `linear-gradient(to bottom, #57607b 30%, #413861 90%)`,
  // padding: '64px 0',
  '& > .wrapper': {
    position: 'relative',
    width: 'auto',
    maxWidth: 'none',
    padding: 0,
    paddingTop: 240,
    '& .globeContainer': {
      position: 'absolute',
      top: 0
    }
  }
}))

const Subscribe = styled(Box)(() => ({
  // width: 870,
  // height: 870,
  // margin: '64px auto',
  // border: '3px solid #fff',
  // borderRadius: '50%',
  // display: 'flex',
  // alignItems: 'center',,
  position: 'relative',
  width: 780,
  margin: '0 auto',
  '& .wrapper': {
    width: '100%',
    margin: '0 auto',
    border: '3px solid #fff',
    borderRadius: '48px',
    paddingBottom: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .knot': {
      width: '30%',
      height: 24,
      backgroundColor: '#fff',
      borderRadius: '0 0 32px 32px',
      margin: '-1px 0 42px'
    },
    '& > .item': {
      margin: '12px 0'
    },
    '& .text': {
      lineHeight: '75%',
      fontSize: 14.7,
      fontWeight: 600,
      color: '#fff'
    },
    '& .heading': {
      fontSize: 42,
      fontWeight: 700,
      // marginTop: 'calc(-48px - 18px)',
      // backgroundColor: '#57607b',
      padding: '0 8px'
    }
  }
}))

const Main = styled(Box)(() => ({
  margin: '0 auto',
  width: '66%',
  position: 'relative',
  '& .layer': {
    '&.one': {
    },
    '&.two': {
      position: 'absolute',
      filter: 'url(#footerGoo)',
      width: '100%',
      top: 0
    }
  }
}))

const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  '& > .col': {
    height: '100%',
    display: 'flex',
    '& .box': {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .copyright': {
        color: '#fff',
        fontWeight: 300,
        fontSize: 15
      }
    },
    '& .cell': {
      backgroundColor: alpha('#ffffff', 1),
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: 18,
      '& .stayInTouch': {
        lineHeight: '75%',
        fontSize: 44,
        fontWeight: 900,
        fontFamily: '"Grandstander", cursive',
        textAlign: 'right',
        margin: '12px 32px 0 auto',
        textTransform: 'capitalize',
        color: theme.palette.primary.main
      },
      '& .socialMedia': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingLeft: '0%',
        '& .item': {
          margin: '22.5px 0 0px 0',
          '& .link': {
            display: 'flex',
            '& svg.icon': {
              fill: theme.palette.primary.light,
              width: 24,
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
                width: 39,
                '& path': {
                  strokeWidth: 1
                }
              },
              '&.instagram': {
                width: 39,
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
                fill: `${theme.palette.secondary.darker}!important`,
                '& path': {
                  stoke: `${theme.palette.secondary.darker}!important`,
                },
                '&.facebook.important': {
                  stoke: `${theme.palette.secondary.darker}!important`,
                  '& path': {
                    stoke: `${theme.palette.secondary.darker}!important`,
                    strokeWidth: 0
                  }
                }
              }
            }
          }
        }
      },
      '&.info': {
        '& .col': {
          padding: 24,
          '& > *': {
            margin: '9px 0'
          },
          '& .text': {
            lineHeight: '150%',
            fontSize: 15,
            fontWeight: 500
          },
          '& .heading': {
            backgroundColor: theme.palette.secondary.darker,
            padding: 6,
            borderRadius: 16,
            '& .text': {
              lineHeight: '75%',
              fontSize: 13.5,
              fontWeight: 700,
              '&:first-letter': {
                textTransform: 'capitalize'
              }
            }
          },
          '& .article': {
            '& .text': {
              color: alpha('#000', .78)
            }
          }
        }
      }
    }
  },
  [theme.breakpoints.down("lg")]: {
    '& > .col': {
      '& .box': {
        '& .copyright': {
          fontSize: 12
        }
      },
      '& .cell': {
        padding: 16,
        '& .stayInTouch': {
          fontSize: 36,
          margin: '12px 32px 0 auto',
        },
        '&.info': {
          '& .col': {
            padding: 18,
            '& .text': {
              fontSize: 12
            }
          }
        }
      }
    }
  }
}))



export { 
  Root, 
  Subscribe, 
  Main, 
  Row
}