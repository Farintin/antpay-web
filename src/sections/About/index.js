import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Root, Bg, Gradient, Main, HIWs, About } from "./component"



export default function () {
  return (
    <Root>
      <Bg />
      <Gradient />
      <Main>
        <Box className="wrapper">
          <HIWs>
            <Typography className="heading">Transact in 3 easy steps</Typography>
            <Grid container spacing={0} className="steps" sx={{ my: 6, mx: 2 }}>
              <Grid item xs={0} className="col col-1">

                <Box className="item number">
                  <Box className="box">
                    <Typography className="text">1.</Typography>
                  </Box>
                </Box>
                <Box className="item article">
                  <Typography className="text">
                    Type the amount<br/>
                    you want to send with<br/>
                    currency type ($200)
                  </Typography>
                </Box>

              </Grid>
              <Grid item xs={0} className="col col-2">

                <Box className="item number">
                  <Box className="box">
                    <Typography className="text">2.</Typography>
                  </Box>
                </Box>
                <Box className="item article">
                  <Typography className="text">
                    Select the generated<br/>
                    sticker and send.
                  </Typography>
                </Box>

              </Grid>
              <Grid item xs={0} className="col col-3">
                
                <Box className="item number">
                  <Box className="box">
                    <Typography className="text">3.</Typography>
                  </Box>
                </Box>
                <Box className="item article">
                  <Typography className="text">
                    Click sticker to save<br/>
                    and get credited<br/>
                    instantly.
                  </Typography>
                </Box>

              </Grid>
            </Grid>
          </HIWs>
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
                    Antpay is a social banking application that connects 
                    users to seamless banking tools through messaging. 
                    We are creating a banking playground where users can 
                    seamlessly transact by just sending stickers. 
                    We are building an exceptional convenient  digital 
                    payment experience, all within our messaging platform.
                  </Typography>
                  <br/>
                  <Typography className="text">
                    This gives users the opportunity to send and receive money, 
                    both localand international, in split seconds while having fun. 
                    We are happy people, that is why we choose to make every 
                    transaction move with a great smile. 😀
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </About>
        </Box>
      </Main>
    </Root>
  )
}