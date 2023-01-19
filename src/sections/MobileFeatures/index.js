import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Root, Features, Download, Button } from "./component"
import { AppStoreIcon, PlayStoreIcon } from "../../components/icon"



export default function () {
  return (
    <Root id="features-section" className="page-section">

      <Container className="wrapper">

        <Typography className="heading">
          . Features .
        </Typography>

        <Features container spacing={0} className="row-1" sx={{ mt: 9 }}>

          <Grid item xs={12}>
            <Box className="card card1">
              <Box className="wrapper">
                <Box className="main">
                  
                  <Box className="image">
                    <img src="/image/features/invitation.png" alt="feature" />
                  </Box>
                  <Box className="title">
                    <Typography className="text goo">text</Typography>
                    <Typography className="text main">text</Typography>
                  </Box>
                  <Typography className="text article">
                    Simple, Reliable messaging. 
                    Message your friends and family for free.
                  </Typography>
                  
                </Box>
                            
                <div className="shape jar top">
                    <div className="stroke top"></div>
                    <div className="stroke bottom"></div>
                </div>
                <div className="shape jar bottom">
                    <div className="stroke top"></div>
                    <div className="stroke bottom"></div>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="card card2">
              <Box className="wrapper">
                <Box className="main">
                  <Box className="image" style={{ marginTop: '-46.5%' }}>
                    <img src="/image/features/bank.png" alt="feature" />
                    <Box className="spot" />
                  </Box>
                  <Box className="title">
                    <Typography className="text goo">payment</Typography>
                    <Typography className="text main">payment</Typography>
                  </Box>
                  <Typography className="text article">
                    Convenient, Reliable mobile banking. 
                    Transact with your friends and business partners 
                    across the globe seamlessly with ant payment stickers.
                  </Typography>
                </Box>
                
                <Box className="shape trapezium left" />
                <Box className="shape trapezium right" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="card card1">
              <Box className="wrapper">
                <Box className="main">

                  <Box className="image">
                    <img src="/image/features/credit-card.png" alt="feature" />
                  </Box>
                  <Box className="title">
                    <Typography className="text goo">physical & virtual cards</Typography>
                    <Typography className="text main">physical & virtual cards</Typography>
                  </Box>
                  <Typography className="text article">
                    We provide both physical & virtual debit cards for our customers to 
                    withdraw cash from ATMs, and make local & international 
                    transactions online.
                  </Typography>

                </Box>
                
                <div className="shape jar top">
                    <div className="stroke top"></div>
                    <div className="stroke bottom"></div>
                </div>
                <div className="shape jar bottom">
                    <div className="stroke top"></div>
                    <div className="stroke bottom"></div>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="card card2">
              <Box className="wrapper">
                <Box className="main">
                  <Box className="image">
                    <img src="/image/features/credit-card2.png" alt="feature" />
                    <Box className="spot" />
                  </Box>
                  <Box className="title">
                    <Typography className="text goo">account creation</Typography>
                    <Typography className="text main">account creation</Typography>
                  </Box>
                  <Typography className="text article">
                    Create and manage multiple foreign wallets with 
                    account numbers (USD, NGN, GBP).
                  </Typography>
                </Box>
                
                <Box className="shape trapezium left" />
                <Box className="shape trapezium right" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="card card1">
              <Box className="wrapper">
                <Box className="main">

                  <Box className="image">
                    <img src="/image/features/folder.png" alt="feature" />
                  </Box>
                  <Box className="title">
                    <Typography className="text goo">document sharing</Typography>
                    <Typography className="text main">document sharing</Typography>
                  </Box>
                  <Typography className="text article">
                    Send PDFs, documents, spreadsheets, slideshows, 
                    and more, without the hassle of email or file sharing apps. 
                    You can send documents up to 100 MB, 
                    so it's easy to get what you need over to who you want.
                  </Typography>

                </Box>
                
                <div className="shape jar top">
                    <div className="stroke top"></div>
                    <div className="stroke bottom"></div>
                </div>
                <div className="shape jar bottom">
                    <div className="stroke top"></div>
                    <div className="stroke bottom"></div>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="card card2">
              <Box className="wrapper">
                <Box className="main">

                  <Box className="image">
                    <img src="/image/features/chating.png" alt="feature" />
                    <Box className="spot" />
                  </Box>
                  <Box className="title">
                    <Typography className="text goo">voice and video calls</Typography>
                    <Typography className="text main">voice and video calls</Typography>
                  </Box>
                  <Typography className="text article">
                    Speak freely. With voice calls, you can talk to your 
                    friends and family for free, even if they're in 
                    another country.
                  </Typography>

                </Box>
                
                <Box className="shape trapezium left" />
                <Box className="shape trapezium right" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="card card1">
              <Box className="wrapper">
                <Box className="main">

                  <Box className="image">
                    <img src="/image/features/microphone.png" alt="feature" />
                  </Box>
                  <Box className="title">
                    <Typography className="text goo">voice messages</Typography>
                    <Typography className="text main">voice messages</Typography>
                  </Box>
                  <Typography className="text article">
                    Say what you want: Sometimes, your voice says it all. 
                    With just one tap you can record a Voice Message, 
                    perfect for a quick hello or a longer story.
                  </Typography>

                </Box>
                
                <div className="shape jar top">
                    <div className="stroke top"></div>
                    <div className="stroke bottom"></div>
                </div>
                <div className="shape jar bottom">
                    <div className="stroke top"></div>
                    <div className="stroke bottom"></div>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="card card2">
              <Box className="wrapper">
                <Box className="main">

                  <Box className="image">
                    <img src="/image/features/camera.png" alt="feature" />
                    <Box className="spot" />
                  </Box>
                  <Box className="title">
                    <Typography className="text goo">photos and videos</Typography>
                    <Typography className="text main">photos and videos</Typography>
                  </Box>
                  <Typography className="text article">
                    Share moments that matter: Send photos and videos on Antpay instantly. 
                    You can even capture the moments that matter to you most with a built-in camera. 
                    With Ant, photos and videos are sent quickly even if you're on a slow connection.
                  </Typography>

                </Box>
                
                <Box className="shape trapezium left" />
                <Box className="shape trapezium right" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="card card3">
              <Box className="wrapper">
                <Box className="main">

                  <Box className="image">
                    <img src="/image/features/hand.png" alt="feature" />
                  </Box>
                  <Box className="title">
                    <Typography className="text goo">palm payment</Typography>
                    <Typography className="text main">palm payment</Typography>
                  </Box>
                  <Typography className="text article">
                    Register your palm and connect it to your
                    wallet to make payment (POS) without using 
                    your credit card. You only need your palm.
                  </Typography>

                </Box>
                
                <Box className="shape" />
                <Box className="shape two" />
              </Box>
            </Box>
          </Grid>

        </Features>
        
        <Download sx={{ mt: 8, mb: 6 }}>

          {/* <img src="/image/right-arrow.png" alt="arrow-right" className="image arrow right" /> */}
          <Typography className="text">
            {'>>>'}
          </Typography>
          <Button to="/download">
            <Typography className="label">Download</Typography>
            <PlayStoreIcon style={{ marginRight: 0 }} />
            <AppStoreIcon style={{ marginTop: -4, marginLeft: 5.4 }} />
          </Button>
          {/* <img src="/image/left-arrow.png" alt="arrow-left" className="image arrow left" /> */}

        </Download>

      </Container>

      <Box className="bg" />


        
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
          <defs>
              <filter id="trapeziumGoo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -3" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
              </filter>
          </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
          <defs>
              <filter id="jarGoo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
              </filter>
          </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none'}}>
          <defs>
              <filter id="featuresCardTitleGoo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -1" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
              </filter>
          </defs>
      </svg>
    </Root>
  )
}




        /* <Box className="heading">
          <PixelFont className='dot' />
          <PixelFont className='F' />
          <PixelFont className='E' />
          <PixelFont className='A' />
          <PixelFont className='T' />
          <PixelFont className='U' />
          <PixelFont className='R' />
          <PixelFont className='E' />
          <PixelFont className='S' />
          <PixelFont className='dot' />
        </Box> */
