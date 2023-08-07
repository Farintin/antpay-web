import Box from "@mui/material/Box"
import InputBase from "@mui/material/InputBase"
import { styled, alpha } from "@mui/material/styles"





const Root = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to bottom, ${alpha('#fff', 1)} -30%, ${alpha(theme.palette.primary.lighter, 1)} 165%)`,
  width: '100%',
  height: '100%',
  top: 0,
  overflow: 'overlay',
  position: 'relative',
  '.grid-stack': {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'minmax(min-content, max-content) auto',
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
        '& > .wrapper': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          padding: '8px 48px',
          '& > *': {
            margin: 8
          }
        }
      }
    }
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
      fontSize: 22.5,
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
  },
  '& .loadingModal': {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: alpha('#000', .15),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const Input = styled(InputBase)(({ theme }) => ({
  '& *': {
    padding: 0,
  },
  '& .MuiInputBase-input': {
    fontSize: 15,
    fontWeight: 500,
    color: theme.palette.primary.main,
    letterSpacing: '0px'
  }
}))

const TextInput = styled(Box)(({ theme }) => ({
  width: '100%',
  '& .wrapper': {
    borderRadius: 12,
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: '15px 19.5px',
    paddingRight: 27,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiInputBase-root': {
      width: '100%',
      '& input': {
        fontWeight: 400,
        fontSize: 13.5,
        color: '#000',
        padding: 0,
        '&.Mui-disabled': {
          WebkitTextFillColor: '#000'
        }
      }
    },
    '& .icon': {
      width: 13.8
    }
  },
  '&.placeholder': {
    '& .wrapper': {
      '& .MuiInputBase-root': {
        '& input': {
          color: alpha('#000', .6)
        }
      }
    }
  }
}))

const StatusInput = styled(Box)(({ theme }) => ({
  width: '100%',
  '& > .wrapper': {
    borderRadius: 12,
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: '15px 19.5px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& .box': {
      '&.input': {
        flexGrow: 1,
        paddingRight: 8,
        '& .MuiInputBase-root': {
          width: '100%',
          '& input': {
            fontSize: 15,
            fontWeight: 400,
            color: '#000',
            padding: 0
          }
        }
      },
      '&.dropdownBtn': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        padding: 8,
        '& .icon.chevronUp': {
          position: 'absolute'
        }
      }
    }
  },
  '&.placeholder': {
    '& > .wrapper': {
      '& .box': {
        '&.input': {
          flexGrow: 1,
          '& .MuiInputBase-root': {
            '& input': {
              color: alpha('#000', .6)
            }
          }
        }
      }
    }
  },
  '&.collapse': {
    '& > .wrapper': {
      '& .box': {
        '&.dropdownBtn': {
          '& .icon.chevronUp': {
            opacity: 0
          }
        }
      }
    },
    '& .list': {
      opacity: 0,
      scale: 0,
      height: 0,
      padding: 0,
      margin: 0
    }
  },
  '&.expand': {
    '& > .wrapper': {
      '& .box': {
        '&.dropdownBtn': {
          '& .icon.chevronDown': {
            opacity: 0
          }
        }
      }
    }
  }
}))

const StatusList = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '16px 0',
  backgroundColor: theme.palette.primary.light,
  borderRadius: 9.6,
  padding: '8px 0px',
  '& > .wrapper': {
    width: '100%',
    maxHeight: 240,
    padding: '0 1px 0 12px',
    overflow: 'auto',
    '::-webkit-scrollbar': {
      background: 'transparent',
      width: '13px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.lighter,
      border: '4px solid rgba(255, 255, 255, 0)',
      backgroundClip: 'padding-box',
      borderRadius: '32px'
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: theme.palette.secondary.main
    },
    '& .item': {
      padding: '8px 12px',
      margin: '4px 0px',
      backgroundColor: alpha(theme.palette.primary.lighter, .3),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 8,
      cursor: 'pointer',
      '& .text': {
        color: '#fff',
        lineHeight: '120%',
        fontSize: 15,
        fontWeight: 500,
        '&::first-letter': {
          textTransform: 'uppercase'
        }
      },
      '&.active': {
        backgroundColor: '#ADFFE1',
        '& .text': {
          color: theme.palette.primary.main,
          fontWeight: 500
        }
      },
      '&:hover': {
        backgroundColor: '#ADFFE1',
        '& .text': {
          color: theme.palette.primary.main,
          fontWeight: 500
        }
      }
    }
  }
}))



export { Root, Input, TextInput, StatusInput, StatusList }