import { Box } from "@mui/material"
import { Root } from "./component"



export default function(props) {
    return (
        <Root
            style={props.style}
        >
            <Box 
                className="wrapper"
            >
                <img src={props.image} alt="avatar" />
            </Box>
        </Root>
    )
}