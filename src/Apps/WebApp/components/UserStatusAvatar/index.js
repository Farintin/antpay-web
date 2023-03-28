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
                <Box className="avatar">
                    <Avatar 
                        style={{
                            width: '100%',
                            height: '100%',
                            borderWidth: 3,
                            padding: 3
                        }} 
                        image='/image/transparent-bg.png'
                        />
                    <img src={props.image} alt="user status"/>
                </Box>
                <Typography
                    className="text"
                >
                    your status
                </Typography>
            </Box>
        </Root>
    )
}