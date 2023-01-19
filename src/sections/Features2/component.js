import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import MuiButton from '../../components/MuiButton'



const Root = styled(Box)(() => ({
  background: `linear-gradient(360deg, #22003D -180%, #ADFFE1 240%)`,
  padding: '64px 0 150px',
  position: 'relative',
  '& .wrapper': {
    position: 'relative',
    zIndex: 1,
    /* '& .heading': {
      margin: '18px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    } */
    '& .heading': {
      fontSize: 41.4,
      fontWeight: 700,
      color: '#fff',
      textTransform:' uppercase',
      lineHeight: '75%',
      margin: '32px 0',
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

const Features = styled(Grid)(({ theme }) => ({
  width: '100%',
  padding: '0 64px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&.row-1': {
    '& .MuiGrid-item': {
      '& .card': {
        left: '-15%'
      }
    }
  },
  '&.row-3': {
    '& .MuiGrid-item': {
      '& .card': {
        left: '0%'
      }
    }
  },
  '& .MuiGrid-item': {
    display: 'flex',
    flexDirection: 'column',
    margin: '2.5%',
    position: 'relative',
    height: 300,
    '& .card': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      transition: '.2s ease-out',
      '&:hover': {
        scale: '115.5%',
        background: 'var(--color)',
        padding: 8,
        borderRadius: 21,
        transition: '.2s ease-out',
        '& .wrapper': {
          boxShadow: '0px 24px 24px -12px hsl(0deg 0% 0% / 0%)',
          border: '4px solid #fff',
          borderRadius: 15,
          padding: 10,
          paddingRight: 6,
          paddingTop: 8,
          '& > .main': {
            background: '#0000',
            padding: 0,
            transition: '.2s ease-out',
            '& .image': {
              opacity: 0,
              display: 'none',
              '& img': {
              }
            },
            '& .title': {
              opacity: 0,
              display: 'none',
              '& .text': {
                '&.goo': {
                },
                '&.main': {
                }
              }
            },
            '& .text': {
              '&.article': {
                display: 'block'
              }
            }
          },
          '& .shape': {
            opacity: 0,
            transition: '.05s ease-out'
          }
        }
      },
      '& .wrapper': {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 24px 24px -12px hsl(0deg 0% 0% / 30%)',
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
          padding: 24,
          border: '6px solid var(--color)',
          position: 'relative',
          transition: '.4s ease-out',
          '& .image': {
            width: '69%',
            marginTop: '9%',
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
            '& .text': {
              fontSize: 18,
              fontWeight: 400,
              textTransform: 'uppercase',
              textAlign: 'left',
              fontFamily: "'Bungee', cursive",
              letterSpacing: .9,
              lineHeight: '132%',
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
              fontSize: 13,
              fontWeight: 600,
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'left',
              // opacity: 0,
              display: 'none'
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
        '& .wrapper': {
          '& .main': {
            '& .image': {
              width: '105%',
              marginTop: '-42%',
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
                right: '78.6%'
              },
              '&.right': {
                borderLeft: '50px solid var(--color)',
                left: '78.6%'
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
    },
    '&:nth-child(even)': {
      '& .card': {
        top: '18%'
      }
    },
    [theme.breakpoints.down("lg")]: {
      height: 210,
      '& .card': {
        borderRadius: 15,
        '&:hover': {
          padding: 6,
          '& .wrapper': {
            borderWidth: 3,
            borderRadius: 15,
            padding: 6,
            paddingRight: 4,
          }
        },
        '& .wrapper': {
          '& > .main': {
            borderWidth: 4,
            '& .image': {
              '& img': {
              }
            },
            '& .title': {
              '& .text': {
                fontSize: 12,
                '&.goo': {
                },
                '&.main': {
                }
              }
            },
            '& .text': {
              '&.article': {
                fontSize: 8,
              }
            }
          },
          '& .shape': {
          }
        },
        '&.card1': {
        },
        '&.card2': {
          '& .wrapper': {
            '& .main': {
              '& .image': {
                '& .spot': {
                }
              },
              '& .title': {
                '& .text': {
                  '&.goo': { 
                  },
                  '&.main': {
                  }
                }
              }
            },
            '& .shape': {
              '&.trapezium': {
                '&.left': {
                  right: '72%'
                },
                '&.right': {
                  left: '72%'
                }
              }
            }
          }
        },
        '&.card3': {
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
  '& > *': {
    margin: 24
  },
  '& .image': {
    width: 45
  },
  '& .text': {
    fontSize: 32,
    fontWeight: 500,
    color: '#fff',
    letterSpacing: -6
  }
}))

export { Root, Features, Download, Button }