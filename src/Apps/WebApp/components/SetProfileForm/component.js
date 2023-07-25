import Box from "@mui/material/Box"
import InputBase from "@mui/material/InputBase"
import { alpha, styled } from "@mui/material/styles"
import Button from "../Button"



const Root = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': {
    margin: '6px 0'
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

const ImageInput = styled(Box)(({ theme }) => ({
  width: 150,
  height: 150,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.light,
  '& > .wrapper': {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      scale: '101%',
      objectFit: 'cover',
      objectPosition: 'center'
    },
    '& .editButton': {
      width: '18%',
      height: '18%',
      borderRadius: 'inherit',
      position: 'absolute',
      top: '85%',
      left: '85%',
      transform: 'translate(-50%,-50%)',
      '& > .wrapper': {
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        '& label': {
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: 'pointer'
        },
        '& .iconButton': {
          width: '100%',
          height: '100%',
          backgroundColor: '#ADFFE1',
          borderRadius: 'inherit',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      '&:hover': {
        '& .iconButton': {
          backgroundColor: theme.palette.primary.lighter,
          '& svg': {
            stroke: theme.palette.secondary.lighter,
            strokeWidth: 2
          }
        }
      }
    }
  }
}))

const TextInput = styled(Box)(() => ({
  width: '100%',
  '& .wrapper': {
    borderRadius: 12,
    backgroundColor: alpha('#fff', .6),
    padding: '16px 24px',
    '& .MuiInputBase-root': {
      width: '100%',
      '& input': {
        fontWeight: 400,
        fontSize: 13.5,
        color: '#000'
      }
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

const StatusInput = styled(Box)(() => ({
  width: '100%',
  '& > .wrapper': {
    borderRadius: 12,
    backgroundColor: alpha('#fff', .6),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& .box': {
      padding: '16px 24px',
      '&.input': {
        flexGrow: 1,
        paddingRight: 4,
        '& .MuiInputBase-root': {
          width: '100%',
          '& input': {
            fontSize: 13.5,
            fontWeight: 400,
            color: '#000'
          }
        }
      },
      '&.dropdownBtn': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
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
  borderRadius: 9.6,
  padding: '6px 12px',
  paddingRight: 16,
  backgroundColor: theme.palette.primary.light,
  overflow: 'overlay',
  maxHeight: 400,
  margin: '16px 0',
  '::-webkit-scrollbar': {
    background: 'transparent',
    width: '12px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.lighter,
    border: '3px solid rgba(255, 255, 255, 0)',
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
}))

const Submit = styled(Button)(({ theme }) => ({
  width: '100%',
  '&.disable': {
    cursor: 'not-allowed',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .label': {
          color: '#fff'
      }
    }
  }
}))



export { 
  Root, 
  Input, 
  ImageInput,
  StatusInput, 
  StatusList,
  TextInput,
  Submit
}