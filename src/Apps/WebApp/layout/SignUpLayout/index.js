import Box from "@mui/material/Box"
import { Root } from "./component"



export default function ({ children }) {
  return (
    <Root>
      <Box className="wrapper">
        {children}
      </Box>
    </Root>
  )
}