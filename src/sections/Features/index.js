import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Root, Features, Download, Button } from "./component"



export default function () {
  return (
    <Root id="features-section" className="page-section">
      <Container className="wrapper">

        <Typography className="heading">
          Features
        </Typography>
        <Features container spacing={6}>

          <Grid item xs={3}>
            <Box className="sub-heading">
              <Typography className="text">
                text
              </Typography>
            </Box>
            <Box className="article">
              <Box className="image">
                <img 
                  className="icon" 
                  src="/icons/text.svg" 
                  alt="message icon"
                />
              </Box>
              <Typography className="text">
                Simple, Reliable messaging. 
                Message your friends and family for free.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box className="sub-heading">
              <Typography className="text">
                banking
              </Typography>
            </Box>
            <Box className="article">
              <Box className="image">
                <img 
                  className="icon" 
                  src="/icons/banking.svg" 
                  style={{ width: '60%' }}
                  alt="icon"
                />
              </Box>
              <Typography className="text">
                Convenient, Reliable mobile banking. 
                Transact with your friends and business
                partners across the globe seamlessly with 
                ant payment stickers.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box className="sub-heading">
              <Typography className="text">
                physical cards
              </Typography>
            </Box>
            <Box className="article">
              <Box className="image">
                <img 
                  className="icon" 
                  src="/icons/physical-cards.svg" 
                  style={{ width: '55%' }}
                  alt="icon"
                />
              </Box>
              <Typography className="text">
                We provide physical debit cards for our 
                customers to withdraw cash from ATMs, and 
                make local & international transactions from 
                the point of sale and online transactions.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box className="sub-heading">
              <Typography className="text">
                account creation
              </Typography>
            </Box>
            <Box className="article">
              <Box className="image">
                <img className="icon" src="/icons/account-creation.svg" alt="icon"/>
              </Box>
              <Typography className="text">
                Upon request, we create a free US bank account 
                without requesting for social security number (SSN), 
                for users to easily receive funds (dollars). 
              </Typography>
            </Box>
          </Grid>

        </Features>
        <Features container spacing={6}>

          <Grid item xs={3}>
            <Box className="sub-heading">
              <Typography className="text">
                voice and video calls
              </Typography>
            </Box>
            <Box className="article">
              <Box className="image">
                <img 
                  className="icon" 
                  src="/icons/voice-and-video-calls.svg" 
                  style={{ width: '60%' }}
                  alt="icon"
                />
              </Box>
              <Typography className="text">
                Speak freely. With voice calls, you can talk to your friends and
                family for free, even if they're in another country. 
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box className="sub-heading">
              <Typography className="text">
                document sharing
              </Typography>
            </Box>
            <Box className="article">
              <Box className="image">
                <img className="icon" src="/icons/document-sharing.svg" alt="icon"/>
              </Box>
              <Typography className="text">
                Send PDFs, documents, spreadsheets, slideshows, and more, 
                without the hassle of email or file sharing apps. 
                You can send documents up to 100 MB, so it's easy 
                to get what you need over to who you want.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box className="sub-heading">
              <Typography className="text">
                photos and videos
              </Typography>
            </Box>
            <Box className="article">
              <Box className="image">
                <img 
                  className="icon" 
                  src="/icons/photos-and-videos.svg" 
                  style={{ width: '55%' }}
                  alt="icon"
                />
              </Box>
              <Typography className="text">
                Share moments that matter: Send photos and videos on Antpay instantly.
                You can even capture the moments that matter to you most with a built-in camera. With
                Ant, photos and videos are sent quickly even if you're on a slow connection.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box className="sub-heading">
              <Typography className="text">
                voice messages
              </Typography>
            </Box>
            <Box className="article">
              <Box className="image">
                <img 
                  className="icon" 
                  src="/icons/voice-messages.svg" 
                  style={{ width: '45%' }}
                  alt="icon"
                />
              </Box>
              <Typography className="text">
                Upon request, we create a free US bank account 
                without requesting for social security number (SSN), 
                for users to easily receive funds (dollars). 
              </Typography>
            </Box>
          </Grid>

        </Features>

        <Download sx={{ mt: 20, mb: 4 }}>
          <Typography className="text">
            {'>>>'}
          </Typography>
          <Button>
            <Typography className="label">
              Download Antpay
            </Typography>
          </Button>
          <Typography className="text">
            {'<<<'}
          </Typography>
        </Download>

      </Container>
    </Root>
  )
}