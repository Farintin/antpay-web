// import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { Root, Partners } from "./component"



export default function () {
  return (
    <Root>
      <Container className="wrapper">

        <Partners container spacing={0}>

          <Grid item xs={4}>
            <img
              className="image"
              src="/image/logo/partners/visa.svg"
              alt="visa"
              style={{
                width: '66%'
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className="image"
              src="/image/logo/partners/stripe.png"
              alt="stripe"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className="image"
              src="/image/logo/partners/justblack..svg"
              alt="justblack."
              style={{
                width: '81%'
              }}
            />
          </Grid>

        </Partners>

      </Container>
    </Root>
  )
}