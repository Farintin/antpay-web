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
                <Box 
                    className="statusAvatar"
                >
                    <Box 
                        className="wrapper"
                    >
                        <img src="/image/status/3-2.png" alt="avatar" />
                    </Box>
                </Box>
            </Box>
        </Root>
    )
}