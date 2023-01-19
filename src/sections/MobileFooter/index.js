import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Root, Subscribe, Main } from "./component"
import MobileSubscribeForm from "../../components/MobileSubscribeForm"
import { LogoAquaGradientBrandnameWhiteDotAqua } from "../../components/Logo"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../components/icon"


export default function () {
  return (
    <Root id="contact-section" className="page-section">
      <Container className="wrapper">

        <Subscribe>
          <Box className="wrapper one">
            <Box className="wrapper two">
              <Box className="knot"/>
              <Typography className="item text heading">
                Be the first to know
              </Typography>
              <Typography 
                className="item text" 
                style={{ 
                  marginTop: 12,
                  lineHeight: '150%'
                }}
              >
                Subscribe to our newsletter and get info on all our updates and features!
              </Typography>

              <MobileSubscribeForm className="item" />
            </Box>
          </Box>
        </Subscribe>

        <Main sx={{ mt: 16 }}>
          <LogoAquaGradientBrandnameWhiteDotAqua 
            style={{ width: 255 }}
          />

          <Box className="cell">
            <Typography className="stayInTouch">stay in touch.</Typography>

            <Box className="info">
              <Box className="heading">
                <Typography className="text">email</Typography>
              </Box>
              <Box className="article">
                <Typography className="text email">hi@antpay.cool</Typography>
              </Box>
            </Box>
            <Box className="info">
              <Box className="heading">
                <Typography className="text">headquaters</Typography>
              </Box>
              <Box className="article">
                <Typography className="text address">
                  3 Germay Dr, Wilmington,
                  DE 19804, USA.
                </Typography>
              </Box>
            </Box>
            <Box className="info">
              <Box className="heading">
                <Typography className="text">nigerian office</Typography>
              </Box>
              <Box className="article">
                <Typography className="text address">
                  Plot 10 A, T.F Kuboye Street, Lekki 1.
                </Typography>
              </Box>
            </Box>

            <Box className="socialMedia">
              <Box className="item">
                <a href="https://web.facebook.com/antpay.cool" className="link">
                  <FacebookIcon className="facebook important" />
                </a>
              </Box>
              <Box className="item">
                <a href="https://twitter.com/antpay_cool" className="link">
                  <TwitterIcon className="twitter" />
                </a>
              </Box>
              <Box className="item">
                <a href="https://instagram.com/antpay.cool" className="link">
                  <InstagramIcon className="instagram" />
                </a>
              </Box>
            </Box>

          </Box>
          
          <Typography className="text copyright">
            All rights reserved. &copy; 2023 ANTPAY.
          </Typography>
        </Main>

      </Container>
    </Root>
  )
}