// import Box from "@mui/material/Box"
import { Box } from "@mui/material"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Root, Partners } from "./component"



export default function () {
  return (
    <Root>
      <Box className="curve top" />
      <Box className="curve bottom" />

      <Typography className="heading">Our Partners</Typography>
      <Container className="wrapper">

        <Partners container spacing={2}>

          <Grid item xs={4}>
            <img
              className="image"
              src="/image/logo/partners/visa.png"
              alt="visa"
              style={{
                width: '58.5%'
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className="image"
              src="/image/logo/partners/stripe_w200.png"
              alt="stripe"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              className="image"
              src="/image/logo/partners/justblack2_200x200.png"
              alt="justblack."
              style={{
                width: '31.5%',
                marginRight: '27%'
              }}
            />
          </Grid>

        </Partners>

      </Container>
    </Root>
  )
}