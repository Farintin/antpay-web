import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Root } from "./component"
import Avatar from "../Avatar"



export default function(props) {
    return (
        <Root
            style={props.style}
        >
            <Box 
                className="wrapper"
            >
                <Avatar 
                    style={{
                        width: 78,
                        height: 78,
                        borderWidth: 3,
                        padding: 3,
                        cursor: 'pointer'
                    }} 
                    image={props.image}
                    />
                <Typography
                    className="text"
                >
                    {props.userName}
                </Typography>
            </Box>
        </Root>
    )
}