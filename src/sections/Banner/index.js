import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Root, Button } from "./component"



export default function () {
  return (
    <Root>
      <Container className="wrapper">

        <Box className="content">
          <Typography className="text heading">
            The Fastest Way<br/>
            to Transact
          </Typography>
          <Box className="article">
            <Typography className="text">FAST</Typography>
            <Box className="dot" />
            <Typography className="text">SAFE</Typography>
            <Box className="dot" />
            <Typography className="text">CONVENIENT</Typography>
          </Box>
          <Button href="#">
            <Typography className="label">try antpay</Typography>
          </Button>
        </Box>

      </Container>
    </Root>
  )
}