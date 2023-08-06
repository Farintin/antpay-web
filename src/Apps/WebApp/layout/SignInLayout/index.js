import Box from "@mui/material/Box"
import { Root } from "./component"



export default function ({ children, className }) {
  return (
    <Root
      className={className}
    >
      <Box className="wrapper">
        {children}
      </Box>
    </Root>
  )
}