import { alpha } from '@mui/material/styles'
// ----------------------------------------------------------------------





// SETUP COLORS
const GREY = {
  // 0: '#FFFFFF',
  100: '#f5f5f7',
  200: '#fbfbfc',
  300: '#e7e6ec',
  400: '#ceccd7',
  500: '#9193AB',
  600: '#71748A',
  700: '#53556B',
  800: '#37394E',
  900: '#1C1F32',
  500_8: alpha('#9193AB', 0.08),
  500_12: alpha('#9193AB', 0.12),
  500_16: alpha('#9193AB', 0.16),
  500_24: alpha('#9193AB', 0.24),
  500_32: alpha('#9193AB', 0.32),
  500_48: alpha('#9193AB', 0.48),
  500_56: alpha('#9193AB', 0.56),
  500_80: alpha('#9193AB', 0.8)
}

const PRIMARY = {
  lighter: '#bf76fe',
  light: '#9a28fe',
  main: '#6E01CE',
  dark: '#490189',
  darker: '#1f003b',
  // contrastText: '#fff'
}

const SECONDARY = {
  lighter: '#4dffbe',
  light: '#1affab',
  main: '#00e692',
  dark: '#00b371',
  darker: '#008051',
  // contrastText: '#fff'
}


const palette = () => ({
  // common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] }
})



export default palette
