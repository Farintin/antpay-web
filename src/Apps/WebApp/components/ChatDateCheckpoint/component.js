import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  padding: 8,
  width: 'fit-content',
  '& > .wrapper': {
    padding: '12px 15px',
    borderRadius: 12,
    backgroundColor: theme.palette.primary.main,
    '& > .text.time': {
      color: '#fff',
      fontSize: 15,
      fontWeight: 300,
      letterSpacing: .8,
      lineHeight: '75%'
    }
  },
  '&.sticky': {
    position: 'sticky',
    top: 0
  },
  '&.invisible': {
    opacity: 0
  }
}))


export { Root }