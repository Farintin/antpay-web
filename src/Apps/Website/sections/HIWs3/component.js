import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .bg': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    opacity: .9
  },
  '& .grid': {
    position: 'relative',
    '& .col': {
      '&.col-1': {
        '& .image': {
          width: '100%',
          height: '100%',
          position: 'relative',
          '& img': {
            position: 'absolute',
            width: 'auto',
            height: '150%',
            top: '-27%',
            right: '0%'
          }
        }
      },
      '&.col-2': {
        padding: '108px 0 108px 42px',
        '& .heading': {
          fontSize: 30,
          fontWeight: 700,
          lineHeight: '75%',
          color: theme.palette.primary.main
        },
        '& .steps': {
          marginTop: 42,
          '& .row': {
            display: 'flex',
            alignItems: 'center',
            margin: '24px 0',
            '& > .item': {
              margin: 6
            },
            '& .number': {
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '& .goo': {
                padding: 4,
                width: 72,
                height: 72,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                filter: 'url(#hiwsGoo)',
                '& .node': {
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '50%',
                  position: 'absolute',
                  '&.xl': {
                    width: '60%',
                    height: '55%'
                  },
                  '&.lg': {
                    width: '25%',
                    height: '25%'
                  },
                  '&.md': {
                    width: '20%',
                    height: '20%'
                  },
                  '&.sm': {
                    width: '15%',
                    height: '15%'
                  },
                  '&.xs': {
                    width: '6%',
                    height: '6%'
                  }
                }
              },
              '& .text': {
                color: '#fff',
                fontSize: 22.5,
                fontWeight: 700,
                position: 'absolute'
              }
            },
            '& .article': {
              '& .text': {
                color: '#000',
                fontSize: 14,
                fontWeight: 700,
                lineHeight: '22px'
              }
            }
          }
        }
      }
    }
  },
  [theme.breakpoints.down("lg")]: {
    '& .grid': {
      '& .col': {
        '&.col-1': {
          '& .image': {
            '& img': {
              right: '10%'
            }
          }
        },
        '&.col-2': {
          paddingLeft: 0,
          marginLeft: '-5%',
          '& .heading': {
            fontSize: 30,
          },
          '& .steps': {
            '& .row': {
              '& .number': {
                '& .goo': {
                  width: 64,
                  height: 64,
                  '& .node': {
                    '&.xl': {
                    },
                    '&.lg': {
                    },
                    '&.md': {
                    },
                    '&.sm': {
                    },
                    '&.xs': {
                    }
                  }
                },
                '& .text': {
                  fontSize: 22.5,
                }
              },
              '& .article': {
                '& .text': {
                  fontSize: 12,
                  lineHeight: '18px'
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