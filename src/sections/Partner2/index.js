// import Box from "@mui/material/Box"
import { Box } from "@mui/material"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { Root, Partners } from "./component"



export default function () {
  return (
    <Root>
      <Box className="curve top" />
      <Box className="curve bottom" />

      <Container className="wrapper">

        <Partners container spacing={2}>

          <Grid item xs={4}>
            <img
              className="image"
              src="/image/logo/partners/visa-violet.png"
              alt="visa"
              style={{
                width: '60%'
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className="image"
              src="/image/logo/partners/stripe-violet_w300.png"
              alt="stripe"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className="image"
              src="/image/logo/partners/justblack-purple_w200.png"
              alt="justblack."
              style={{
                width: '30%',
                marginRight: '30%'
              }}
            />
          </Grid>

        </Partners>

      </Container>
    </Root>
  )
}