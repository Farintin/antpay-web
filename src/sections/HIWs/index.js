import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Root } from "./component"



export default function () {
  return (
    <Root>
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
    </Root>
  )
}