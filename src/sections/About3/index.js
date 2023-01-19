import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { Root, Bg, Gradient, Main, About } from "./component"
import HIWs from '../HIWs3'



export default function () {
  return (
    <Root>
      <Bg />
      
      <HIWs />
      <Main>
        <Gradient />
        <Container className="wrapper">
          <About id="about-section" className="page-section" container spacing={0}>

            <Grid item xs={6} className="col col-1">
              <img className="notification" src="/image/notification_w700.png" alt="antpay notification"/>
              <Box className="shadow" />
            </Grid>
            <Grid item xs={6} className="col col-2">
              <Box className="content">
                <Box className="heading">
                  <Typography className="text">About ANTPAY</Typography>
                </Box>
                <Box className="article">
                  <Typography className="text">
                    As messaging has grown, communication, too, has evolved. 
                    Whereas plain text messages were the norm a decade ago, we 
                    gradually replaced or supplemented the text with visual emoticons, 
                    then emojis, and even GIFs. Now, stickers are dominating the 
                    world of digital communication. Stickers express emotions more, 
                    even without saying a word (text). We adopted this pattern of 
                    communication and developed a new banking reality called 
                    financial messaging, where users can chat, connect and transact 
                    with stickers. In this space, stickers will become the 
                    transcripts of transactions. In split seconds, P2P cross-border 
                    transactions will be made, thereby solving the problem of low 
                    speed and high cost of exchange rate around cross-border 
                    transactions. Welcome to ANT Pay, the future of modern payment 😀
                  </Typography>
                </Box>
              </Box>
            </Grid>

          </About>
        </Container>
      </Main>

    </Root>
  )
}