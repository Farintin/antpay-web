import Box from "@mui/material/Box"
// import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Root, Subscribe, Main, Row } from "./component"
import SubscribeForm2 from "../../components/subcribeForm2"
import { LogoAquaGradient } from "../../components/Logo"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../components/icon"
import MuiContainer from "../../components/MuiContainer"


const br = '30px'
const logoCellW = 90
const logoCellH = 81
export default function () {
  return (
    <Root id="contact-section" className="page-section">
      <MuiContainer className="wrapper">

        <Subscribe>
          <Box className="wrapper">
            <Typography className="item text heading">
              Be the first to know
            </Typography>
            <Typography className="item text" style={{ marginTop: '32px' }}>
              Subscribe to our newsletter and get info on all our updates and features!
            </Typography>

            <SubscribeForm2 className="item" />
          </Box>
        </Subscribe>

        <Main sx={{ mt: 15, mb: 0 }}>
          <Box className="layer one">

            <Row sx={{ height: logoCellH }}>
              <Box className="col" style={{ width: logoCellW }}>
                <Box className="box">
                  <LogoAquaGradient 
                    className='logo' 
                    style={{ 
                      width: '81%', 
                      marginBottom: -4.5,
                      marginRight: 1.5
                    }}
                  />
                </Box>
              </Box>
              <Box className="col" style={{ width: `calc(30% - ${logoCellW}px)` }}>
                <Box className="cell" sx={{ borderRadius: `${br} 0 0 0` }}>
                </Box>
              </Box>
              <Box className="col" style={{ width: 'calc(70%)' }}>
                <Box className="cell" sx={{ borderRadius: `0px ${br} 0 0` }}>
                </Box>
              </Box>
            </Row>
            
            <Row sx={{ height: 210 }}>
              <Box className="col" style={{ width: logoCellW }}>
                <Box 
                  className="cell" 
                  style={{ 
                    borderRadius: `${br} 0 0 0`,
                    padding: '32px 0'
                  }}
                >
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
                </Box>
              </Box>
              <Box className="col" style={{ width: `calc(100% - ${logoCellW}px)` }}>
                <Box className="cell" sx={{ borderRadius: `0px 0 ${br} 0` }}>
                </Box>
              </Box>
            </Row>
            
            <Row sx={{ height: 64 }}>
              <Box className="col" style={{ width: 'calc(60%)' }}>
                <Box className="cell" sx={{ borderRadius: `0px 0 ${br} ${br}` }}>
                </Box>
              </Box>
              <Box className="col" style={{ width: 'calc(40%)' }}>
                <Box className="box">
                  <Typography className="text copyright">
                    All rights reserved. &copy; 2023 ANTPAY.
                  </Typography>
                </Box>
              </Box>
            </Row>

          </Box>

          <Box className="layer two">

            <Row sx={{ height: logoCellH }}>
              <Box className="col col1" style={{ width: logoCellW }}>
                <Box className="box">
                </Box>
              </Box>
              <Box className="col col2" style={{ width: `calc(50% - ${logoCellW}px)` }}>
                <Box className="cell" sx={{ borderRadius: `${br} 0 0 0` }}>
                  <img 
                    src="/image/logo/antpay-brandname-purple-plus-aqua-dot_w300.png" 
                    alt="antpay brand name" 
                    style={{
                      height: '128.5%',
                      marginTop: 15
                    }}
                  />
                </Box>
              </Box>
              <Box className="col col3" style={{ width: 'calc(50%)' }}>
                <Box className="cell" sx={{ borderRadius: `0px ${br} 0 0` }}>
                  <Typography className="stayInTouch">stay in touch.</Typography>
                </Box>
              </Box>
            </Row>
            
            <Row className="row row2" sx={{ height: 210 }}>
              <Box className="col col1" style={{ width: logoCellW }}>
                <Box 
                  className="cell" 
                  style={{ 
                    borderRadius: `${br} 0 0 0`,
                    padding: '32px 0'
                  }}
                >
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
              </Box>
              <Box className="col col2" style={{ width: `calc(100% - ${logoCellW}px)` }}>
                <Box className="cell info" sx={{ borderRadius: `0px 0 ${br} 0` }}>
                  
                  <Grid 
                    container 
                    spacing={0} 
                    sx={{ 
                      width: '90%',
                      my: 2,
                      mx: 'auto'
                    }}
                  >

                    <Grid item xs={3} className="col col1">
                      <Box className="heading">
                        <Typography 
                          className="text"
                        >
                          email
                        </Typography>
                      </Box>
                      <Box className="article">
                        <Typography className="text email">
                          hi@antpay.cool
                        </Typography>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={4.5} className="col col2">
                      <Box className="heading">
                        <Typography 
                          className="text"
                        >
                          headquaters
                        </Typography>
                      </Box>
                      <Box className="article">
                        <Typography className="text address">
                          3 Germay Dr, Wilmington,<br/>
                          DE 19804, USA.
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={4.5} className="col col3">
                      <Box className="heading">
                        <Typography 
                          className="text"
                        >
                          nigeria office
                        </Typography>
                      </Box>
                      <Box className="article">
                        <Typography className="text address">
                          Plot 10 A, T.F Kuboye Street, Lekki 1.
                        </Typography>
                      </Box>
                    </Grid>

                  </Grid>

                </Box>
              </Box>
            </Row>
            
            <Row sx={{ height: 64 }}>
              <Box className="col" style={{ width: 'calc(60%)' }}>
                <Box className="cell" sx={{ borderRadius: `0px 0 ${br} ${br}` }}>
                </Box>
              </Box>
              <Box className="col" style={{ width: 'calc(40%)' }}>
                <Box className="box">
                </Box>
              </Box>
            </Row>

          </Box>
          
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{width: 0, height: 0 }}>
            <defs>
              <filter id="footerGoo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </Main>

      </MuiContainer>
    </Root>
  )
}