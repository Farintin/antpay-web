import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"





const Root = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  '.grid-stack': {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'min-content min-content minmax(0, auto)',
    '& > .row': {
      '&.row-1': {
      },
      '&.row-2': {
      },
      '&.row-3': {
      }
    },
  }
}))



export { Root }