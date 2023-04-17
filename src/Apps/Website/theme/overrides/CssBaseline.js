// ----------------------------------------------------------------------

export default function CssBaseline() {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          background: 'tramsparent',
          width: '32px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#8621d1',
          border: '13px solid rgba(255, 255, 255, 0)',
          backgroundClip: 'padding-box',
          borderRadius: '32px'
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#d7a9ff'
        },
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          scrollBehavior: 'smooth',
          fontFamily: 'Poppins'
        },
        html: {
          width: '100%',
          // WebkitOverflowScrolling: 'touch',
          scrollbarColor: '#8621d1 #84e3c5',// '#750dc3 #66ffc7',
          scrollbarWidth: 'thin'
        },
        body: {
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
          overflowX: 'hidden'
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            }
          }
        },
        '.MuiContainer-root': {
          // backgroundColor: 'rgba(255,0,0,.3)'
        }
      }
    }
  }
}
