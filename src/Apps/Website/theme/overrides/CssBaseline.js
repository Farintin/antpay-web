// ----------------------------------------------------------------------

export default function CssBaseline() {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          background: 'rgba(110, 1, 206, 0.93)',
          width: '9px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgb(172, 255, 229)',
          border: 0,
          borderRadius: 0
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgb(55 255 192)'
        },
        html: {
          WebkitOverflowScrolling: 'touch',
          scrollbarColor: '#8621d1 #84e3c5',// '#750dc3 #66ffc7',
          scrollbarWidth: 'thin'
        }
      }
    }
  }
}
