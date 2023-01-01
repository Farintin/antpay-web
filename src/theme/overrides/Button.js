export default function Button (theme) {
  return {
    MuiButtonRoot: {
      styleOverrides: {
        root: {
          padding: '32px'
        },
        paragraph: {
          margin: theme.spacing(8)
        }
      }
    }
  }
}
