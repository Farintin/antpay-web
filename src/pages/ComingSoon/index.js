import Box from "@mui/material/Box"
import { Root } from "./component"
import ComingSoon from '../../sections/ComingSoon'
import MobileComingSoon from '../../sections/MobileComingSoon'



export default function () {
  let render

  if (window.innerWidth > 998) {
    render = <ComingSoon />
  } else {
    render = <MobileComingSoon />
  }
  return (
    <Root>
      <Box className="wrapper">
        {render}
      </Box>
    </Root>
  )
}