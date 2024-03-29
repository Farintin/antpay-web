import { alpha } from '@mui/material/styles'

// ----------------------------------------------------------------------



function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
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
  contrastText: '#fff'
}

const SECONDARY = {
  lighter: '#e0fff4',
  light: '#ccffec',
  main: '#ADFFE1',
  dark: '#66ffc7',
  darker: '#29ffb1',
  contrastText: '#fff'
}
const ALTERNATE_LIGHT = {
  main: '#f7faff',
  dark: '#edf1f7'
}
const ALTERNATE_DARK = {
  main: '#0f1424',
  dark: '#03050b'
}
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff'
}

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800]
}

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800]
}

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff'
}

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
}

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
}

const palette = (mode) => ({
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: {
    paper: mode === 'dark' ? '#242424' : '#fff',
    default: mode === 'dark' ? '#121212' : '#ebeaf1',
    neutral: GREY[200]
  },
  alternate: mode === 'dark' ? ALTERNATE_DARK : ALTERNATE_LIGHT,
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
})



export default palette
