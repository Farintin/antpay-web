import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Root, Main, Subscribe } from "./component"
import SubscribeForm from "../../components/subcribeForm"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../components/icon"


export default function () {
  return (
    <Root id="contact-section" className="page-section">
      <Container className="wrapper">

        <Subscribe sx={{ my: 16 }}>
          <Typography className="text heading">
            Be the first to know
          </Typography>
          <Typography className="text" style={{ marginTop: '32px' }}>
            Subscribe to our newsletter and get info on all our updates and features!
          </Typography>

          <SubscribeForm />
        </Subscribe>

        <Main container spacing={0}  sx={{ mt: 22, mb: 3 }}>

          <Grid item xs={4}>
            <img
              className="logo"
              src="/image/logo/logo-aqua-gradient_and_brand-name-white_and_dot-purple_w300.png"
              alt="antpay logo"
              style={{ marginLeft: -10 }}
            />
            <Typography className="text copyright" style={{ marginTop: 18 }}>
              All rights reserved. &copy; 2022 ANTPAY 
            </Typography>
          </Grid>

          <Grid item xs={4}>

            <Typography 
              className="text heading"
              style={{ marginBottom: 0 }}
            >
              STAY IN TOUCH
            </Typography>

            <Typography className="text email" style={{ marginTop: 0 }}>
              hi@antpay.cool
            </Typography>

            <Box className="address">
              <Typography className="text sub-heading">
                Headquaters
              </Typography>
              <Typography className="text">
                3 Germay Dr, Wilmington,<br/>
                DE 19804, USA
              </Typography>
            </Box>

            <Box className="address">
              <Typography className="text sub-heading">
                Nigerian Office
              </Typography>
              <Typography className="text">
                Plot 10 A, T.F Kuboye Street, Lekki 1
              </Typography>
            </Box>

          </Grid>

          <Grid item xs={4}>

            <Typography className="text heading">
              We’re on social media
            </Typography>
            <Box className="socialMedia">
              <Box className="item">
                <a href="#" className="link">
                  <FacebookIcon />
                </a>
              </Box>
              <Box className="item">
                <a href="#" className="link">
                  <TwitterIcon />
                </a>
              </Box>
              <Box className="item">
                <a href="#" className="link">
                  <InstagramIcon />
                </a>
              </Box>
            </Box>

          </Grid>

        </Main>

      </Container>
    </Root>
  )
}