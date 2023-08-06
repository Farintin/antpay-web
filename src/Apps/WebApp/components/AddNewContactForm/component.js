import { Box, InputBase } from "@mui/material"
import { styled, alpha } from "@mui/material/styles"
import Button from "../Button"



const Root = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '& > .wrapper': {
    '& > *': {
      margin: '4px 0'
    }
  },
  '& .loadingModal': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: alpha('#fff', .72),
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
    letterSpacing: '0px',
    '&:focus': {
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
  paddingRight: 4,
  backgroundColor: theme.palette.primary.light,
  overflow: 'auto',
  maxHeight: 300,
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
  },
  '&.collapse': {
    opacity: 0,
    scale: 0,
    height: 0,
    padding: 0,
    margin: 0
  }
}))

const PhoneInput = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  backgroundColor: '#f9f9f9',
  borderRadius: 8,
  padding: '2px 18px',
  boxShadow: '0px 8px 18px rgba(0,0,0,.24)',
  '& > .wrapper': {
    height: '100%',
    '& > .grid': {
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateColumns: 'auto auto minmax(auto, 54px) auto auto',
      gridTemplateRows: '100%',
      padding: 4,
      '& > .col': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        padding: 4,
        '&.col-1': {
          padding: 2
        },
        '&.col-2': {
          padding: 2
        },
        '& .countryEmoji': {
          fontSize: 20,
          lineHeight: '75%',
          color: theme.palette.primary.main,
          marginBottom: 2
        },
        '& .dropdownBtn': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
          '& .icon': {
            scale: '.72 1',
            stroke: alpha('#000', .72),
            strokeWidth: 2.7,
            '&.chevronUp': {
              position: 'absolute',
              opacity: 1
            },
            '&.chevronDown': {
              opacity: 0
            }
          },
          '&.collapse': {
            '& .icon': {
              '&.chevronUp': {
                opacity: 0
              },
              '&.chevronDown': {
                opacity: 1
              }
            }
          }
        },
        '& .seperator': {
          width: 1,
          height: '90%',
          backgroundColor: 'rgba(60, 60, 67, 0.29)',
          padding: 0
        },
        '& .input': {
          '&.countryCode': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            '& input': {
              color: '#000',
              textAlign: 'center',
              fontWeight: 600
            }
          },
          '&.phoneNumber': {
            flexGrow: 1,
            '& input': {
              fontWeight: 500,
              color: alpha('#000', .45),
              textAlign: 'left'
            }
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
  marginTop: '24px!important',
  '&.disable': {
    cursor: 'not-allowed',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      boxShadow: 'none',
      '& .label': {
          color: '#fff'
      }
    }
  },
  '&:hover': {
    boxShadow: '0px 8px 18px rgba(0,0,0,.24)'
  }
}))



export { 
  Root, 
  Input,
  CountryList,
  Flag, 
  PhoneInput,
  Submit
}