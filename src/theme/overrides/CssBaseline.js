// ----------------------------------------------------------------------

export default function CssBaseline() {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          background: 'transparent',
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
        }
      }
    }
  }
}
