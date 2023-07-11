// ----------------------------------------------------------------------

export default function CssBaseline() {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          background: 'transparent',
          width: '18px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#8621d1',
          border: '6px solid rgba(255, 255, 255, 0)',
          backgroundClip: 'padding-box',
          borderRadius: '32px'
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#d7a9ff'
        },
        html: {
          width: '100%',
          WebkitOverflowScrolling: 'touch'
        },
        body: {
          width: '100%',
          height: '100%'
        },
        '#root': {
          width: '100%',
          height: '100%',
          overflowX: 'hidden'
        }
      }
    }
  }
}
