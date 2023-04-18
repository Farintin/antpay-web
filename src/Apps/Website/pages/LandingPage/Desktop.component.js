import Box from "@mui/material/Box"
import styled from "@mui/material/styles/styled"



const Root = styled(Box)(({ theme }) => ({
    '--theme-shadow-length': theme.shadows.length
}))



export { Root }