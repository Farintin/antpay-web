import Box from "@mui/material/Box"
import { styled, alpha } from "@mui/material/styles"

import Button from "../../components/Button"





const Root = styled(Box)(() => ({
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  top: 0,
  left: '-100%',
  opacity: 0,
  transition: 'left .1s ease-in-out, opacity .2s ease-in-out',
  '.grid-stack': {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'min-content min-content minmax(0, auto)',
    '& > .row': {
      '&.row-1': {
        padding: '18px 36px 24px 30px',
        '& .nav': {
          '& .editButton': {
            cursor: 'pointer',
            boxSizing: 'content-box',
            padding: 14,
            lineHeight: '75%',
            fontSize: 14.4,
            fontWeight: 500,
            letterSpacing: '.2px',
            color: '#ADFFE1',
            '&:hover': {
              color: '#fff'
            }
          }
        }
      },
      '&.row-2': {
        '& > .wrapper': {
          padding: '8px 36px 16px'
        }
      },
      '&.row-3': {
        display: 'flex',
        alignItems: 'flex-end',
        '& > .wrapper': {
          width: '100%',
          height: '100%',
          padding: '36px 20px 0px 36px'
        }
      }
    },
  },
  '&.open': {
    left: '0%',
    opacity: 1,
    '& .grid-stack': {
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
  }
}))


const SearchBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#fcfcfc',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '16px 12px',
  boxShadow: '0px 8px 24px rgba(0,0,0,.18)',
  '& > *': {
    margin: '0 8px'
  },
  '& .input': {
    flexGrow: 1,
    '& .label': {
      fontSize: 13.8,
      fontWeight: 400,
      lineHeight: '100%',
      color: theme.palette.primary.light
    }
  },
  '& .icon': {
    stroke: theme.palette.primary.lighter,
    strokeWidth: 2.4,
    width: 15
  }
}))

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 2px',
  '& .label': {
    fontSize: 13.5,
    fontWeight: 600,
    color: theme.palette.secondary.lighter
  },
  '&:hover': {
    boxShadow: '0px 4px 12px rgba(0,0,0,.25)'
  },
  '&.hide': {
    display: 'none'
  }
}))



export { Root, SearchBar, StyledButton }