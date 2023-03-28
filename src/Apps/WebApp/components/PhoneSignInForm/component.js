import { Box, InputBase } from "@mui/material"
import { styled } from "@mui/material/styles"
import Button from "../Button"



const Root = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': {
    margin: '16px 0'
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
    letterSpacing: '0px',
    '&:focus': {
    }
  }
}))

const CountryInput = styled(Box)(({ theme }) => ({
  '& .wrapper': {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& .box': {
      padding: '12px 24px',
      height: '100%',
      '&.input': {
        flexGrow: 1
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
  '&.collapse': {
    '& .wrapper': {
      '& .box': {
        '&.dropdownBtn': {
          '& .icon.chevronUp': {
            opacity: 0
          }
        }
      }
    },
    '& .autoList': {
      opacity: 0,
      scale: 0,
      height: 0,
      padding: 0,
      margin: 0
    }
  },
  '&.expand': {
    '& .wrapper': {
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
const Flag = styled('img')(() => ({
  width: 36
}))
const CountryList = styled(Box)(({ theme }) => ({
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
    padding: '2px 12px',
    margin: '4px 0px',
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
      fontWeight: 500
    },
    '&.active': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    }
  }
}))

const PhoneInput = styled(Box)(() => ({
  width: '78%',
  '& .wrapper': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& .box': {
      padding: 12,
      height: '100%',
      '&.countryCodeInput': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        '& .MuiInputBase-root': {
          '& input': {
            color: '#000',
            textAlign: 'right'
          }
        }
      },
      '&.seperator': {
        width: 1,
        height: 36,
        backgroundColor: 'rgba(60, 60, 67, 0.29)',
        padding: 0
      },
      '&.input': {
        flexGrow: 1,
        '& .MuiInputBase-root': {
          '& input': {
            fontWeight: 400,
            color: '#585858',
            textAlign: 'left'
          }
        }
      }
    }
  },
  '&.notPlaceholder': {
    '& .wrapper': {
      '& .box': {
        '&.input': {
          '& .MuiInputBase-root': {
            '& input': {
              color: '#000',
              fontWeight: 500
            }
          }
        }
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
  CountryInput, 
  CountryList,
  Flag, 
  PhoneInput,
  Submit
}