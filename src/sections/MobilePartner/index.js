import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { Root, Slide } from "./component"



export default function () {
  return (
    <Root>
      <Box className="curve top" />
      <Box className="curve bottom" />

      <Typography className="heading">Our Partners</Typography>
      <Box className="wrapper">

        <Slide>
          <img
            className="image"
            src="/image/logo/partners/visa-violet.png"
            alt="visa"
            style={{
              width: 150
            }}
          />
          <img
            className="image"
            src="/image/logo/partners/stripe-violet_w300.png"
            alt="stripe"
            style={{
              width: 150
            }}
          />
          <img
            className="image"
            src="/image/logo/partners/justblack-purple_w200.png"
            alt="justblack."
            style={{
              width: 90
            }}
          />
        </Slide>

      </Box>
    </Root>
  )
}