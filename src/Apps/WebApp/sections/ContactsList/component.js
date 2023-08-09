import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"



const Root = styled(Box)(({ theme }) => ({
  padding: '0px 8px 0 0',
  height: '100%',
  overflow: 'auto',
  '::-webkit-scrollbar': {
    width: '8px'
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.light,
    border: '0px solid rgba(255, 255, 255, 0)'
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#d7a9ff'
  },
  '& .contactItem': {
    '&:last-of-type': {
      borderBottomWidth: 0
    }
  },
  '& .alphaSeperation': {
    padding: '18px 8px 0',
    textTransform: 'uppercase',
    fontSize: 17.4,
    fontWeight: 700,
    color: '#000',
    lineHeight: '75%',
    '&:first-of-type': {
      paddingTop: 0
    }
  }
}))



export { Root }