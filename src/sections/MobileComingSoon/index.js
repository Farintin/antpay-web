import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Root } from "./component"
import MuiContainer from "../../components/MuiContainer"
import { LogoAquaGradientBrandnameWhiteDotVioletLG } from "../../components/Logo"



export default function () {
  return (
    <Root>
      <MuiContainer className="wrapper">

        <Box className="content">

          <LogoAquaGradientBrandnameWhiteDotVioletLG
            href="/"
            style={{
              width: 270
            }}
          />
          <Typography className="text">
            Hey Buddy, <br />we are almost ready, 
            Meanwhile, brace up for convenience!
          </Typography>

        </Box>

      </MuiContainer>
    </Root>
  )
}