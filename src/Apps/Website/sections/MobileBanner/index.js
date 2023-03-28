import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Root, Button } from "./component"
import { AppStoreIcon, PlayStoreIcon } from "../../components/icon"



export default function () {
  return (
    <Root>
      <Box className="bannerImage" />
      <Container className="wrapper">

        <Box className="content">

          <Typography className="text heading">
            The Fastest <br/> 
            Way to <br/>
            Transact
          </Typography>

          <Box className="article">
            <Typography className="text">FAST</Typography>
            <Box className="dot" />
            <Typography className="text">SAFE</Typography>
            <Box className="dot" />
            <Typography className="text">CONVENIENT</Typography>
          </Box>

          <Button to="/download" style={{ marginTop: 48 }}>
            <Typography className="label">try antpay</Typography>
            <PlayStoreIcon style={{ marginRight: 0 }} />
            <AppStoreIcon style={{ marginTop: -4, marginLeft: 5.4 }} />
          </Button>

        </Box>

      </Container>
    </Root>
  )
}