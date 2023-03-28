// ----------------------------------------------------------------------

export default function CssBaseline() {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          scrollBehavior: 'smooth',
          fontFamily: 'Poppins'
        },
        html: {
          width: '100%',
          // WebkitOverflowScrolling: 'touch'
        },
        body: {
          width: '100%',
          height: '100%',
          overflow: 'overlay'
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
