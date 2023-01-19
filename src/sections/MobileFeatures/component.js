import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import MuiButton from '../../components/MuiButton'



const Root = styled(Box)(() => ({
  background: `linear-gradient(360deg, #22003D -180%, #ADFFE1 240%)`,
  padding: '64px 0 189px',
  position: 'relative',
  '& .wrapper': {
    position: 'relative',
    zIndex: 1,
    '& .heading': {
      fontSize: 41.4,
      fontWeight: 700,
      color: '#fff',
      textTransform:' uppercase',
      lineHeight: '75%',
      margin: '32px 0 -32px',
      textAlign: 'center'
    }
  },
  '& .bg': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/image/joystick-pattern.png)',
    backgroundPosition: '-5% 33%',
    backgroundSize: '45%',
    opacity: '15%',
    zIndex: 0
  }
}))

const Features = styled(Grid)(() => ({
  width: '100%',
  padding: '0 24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiGrid-item': {
    display: 'flex',
    flexDirection: 'column',
    margin: '81px 0',
    height: 'auto',
    maxWidth: 540,
    '& .card': {
      width: '100%',
      height: '100%',
      transition: '.2s ease-out',
      '& .wrapper': {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 24px 24px -12px hsl(0deg 0% 0% / 30%)',
        borderRadius: 21,
        '& > .main': {
          width: '100%',
          height: '100%',
          background: '#fff',
          borderRadius: 21,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          padding: '5%',
          position: 'relative',
          transition: '.4s ease-out',
          '& .image': {
            width: '60%',
            marginTop: '6%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            position: 'relative',
            transition: '.4s ease-out',
            '& img': {
              width: '100%',
              zIndex: 1
            }
          },
          '& .title': {
            position: 'relative',
            display: 'inline-block',
            transition: '.4s ease-out',
            margin: '32px 0 36px',
            '& .text': {
              fontSize: 22.5,
              fontWeight: 400,
              textTransform: 'uppercase',
              textAlign: 'center',
              fontFamily: "'Bungee', cursive",
              letterSpacing: .9,
              lineHeight: '132%',
              padding: '0 5%',
              '&.goo': {
                filter: 'url(#featuresCardTitleGoo)',
              },
              '&.main': {
                position: 'absolute',
                top: 0
              }
            }
          },
          '& .text': {
            color: '#fff',
            '&.article': {
              transition: '.4s ease-out',
              fontSize: 16,
              fontWeight: 700,
              lineHeight: '150%',
              letterSpacing: 0,
              padding: 24,
              background: 'var(--color)',
              borderRadius: 21,
              textAlign: 'center'
            }
          }
        },
        '& .shape': {
          position: 'absolute',
          zIndex: 0,
          transition: '.8s ease-out'
        }
      },
      '&.card1': {
        marginBottom: 0,
        '--color': '#d74df9',
        '& .wrapper': {
          '& .main': {
            '& .image': {
              background: `linear-gradient(to bottom, rgba(0,0,0,0) 12%, rgba(0,0,0,.105) 100%)`,
            },
            '& .title': {
              '& .text': {
                '&.goo': {
                  color: 'var(--color)',
                  textShadow: '0 0 12px var(--color)'
                },
                '&.main': {
                  position: 'absolute',
                  top: 0
                }
              }
            }
          },
          '& .shape': {
            '&.jar': {
              width: '75%',
              height: '8.5%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              filter: 'url(#jarGoo)',
              '& .stroke': {
                backgroundColor: '#e372ff'
              },
              '&.top': {
                bottom: '97.5%',
                '& .stroke': {
                  '&.top': {
                    width: '100%',
                    height: '40%',
                    borderRadius: '32px'
                  },
                  '&.bottom': {
                    width: '75%',
                    height: '60%'
                  }
                }
              },
              '&.bottom': {
                top: '97.5%',
                '& .stroke': {
                  '&.top': {
                    width: '75%',
                    height: '60%'
                  },
                  '&.bottom': {
                    width: '100%',
                    height: '40%',
                    borderRadius: '32px'
                  }
                }
              }
            }
          }
        }
      },
      '&.card2': {
        '--color': '#30d1be',
        marginTop: '64px',
        '& .wrapper': {
          '& .main': {
            '& .image': {
              width: '90%',
              marginTop: '-27%',
              '& .spot': {
                position: 'absolute',
                width: '81%',
                height: '100%',
                borderRadius: '50%',
                background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.12) 100%)`,
                zIndex: 0,
                transform: 'rotateX(84deg) translateY(100%)',
                bottom: '-39%'
              }
            },
            '& .title': {
              '& .text': {
                '&.goo': { 
                  color: 'var(--color)',
                  textShadow: '0 0 12px var(--color)'
                },
                '&.main': {
                  position: 'absolute',
                  top: 0
                }
              }
            }
          },
          '& .shape': {
            '&.trapezium': {
              height: '50%',
              width: '0px',
              borderTop: '25px solid transparent',
              borderBottom: '25px solid transparent',
              filter: 'url(#trapeziumGoo)',
              '--color': '#62ffd7',
              '&.left': {
                borderRight: '50px solid var(--color)',
                right: 'calc(100% - 32px)'
              },
              '&.right': {
                borderLeft: '50px solid var(--color)',
                left: 'calc(100% - 32px)'
              }
            }
          }
        }
      },
      '&.card3': {
        '--color1': '#d74df9',
        '--color2': '#30d1be',
        '--color': 'linear-gradient(to bottom, var(--color1) 0%, var(--color2) 100%)',
        '& .wrapper': {
          '& .main': {
            '& .image': {
              background: `radial-gradient(rgba(0,0,0,0) 57%, rgba(0,0,0,.18) 75%)`,
              width: '66%',
              padding: '6%',
              boxSizing: 'content-box'
            },
            '& .title': {
              '& .text': {
                textAlign: 'center',
                '&.goo': {
                  color: 'var(--color1)',
                  // background: 'linear-gradient(to bottom, var(--color1) 0%, var(--color2) 100%)',
                  // backgroundClip: 'text',
                  // textFillColor: 'transparent',
                  textShadow: '0 0 12px var(--color2)'
                },
                '&.main': {
                  position: 'absolute',
                  top: 0
                }
              }
            }
          },
          '& .shape': {
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, #62ffd7 40%, #0f00 40%, #0f00 60%, #e372ff 60%)',
            scale: '102%',
            transform: 'skew(3deg, 4.5deg)',
            borderRadius: 19.5,
            '&.two': {
              background: 'linear-gradient(240deg, #62ffd7 40%, #0f00 40%, #0f00 60%, #e372ff 60%)',
              transform: 'skew(-3deg, -4.5deg)',
            }
          }
        }
      }
    }
  }
}))

const Button = styled(MuiButton)(() => ({
  '& .label': {
    fontSize: 16,
    fontWeight: 600
  }
}))

const Download = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '& .image': {
    width: 45
  },
  '& .text': {
    fontSize: 32,
    fontWeight: 500,
    color: '#fff',
    letterSpacing: -6,
    transform: 'rotateZ(90deg)',
    margin: 48
  }
}))

export { Root, Features, Download, Button }