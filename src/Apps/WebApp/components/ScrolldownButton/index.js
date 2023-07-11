import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Root } from "./component"
import ChevronDownIcon from "../icons/ChevronDown.icon"



export default function(props) {
    return (
        <Root
            onClick={props.onClick}
            style={props.style}
        >
            <Box className="wrapper">
                <ChevronDownIcon 
                style={{
                    strokeWidth: 3,
                    stroke: '#444'
                }}
                    />
                
                {
                    props.unreadMessagesCount > 0 ? 
                        <Box className="roomUnreadMessagesCount">
                            <Typography className="text">{props.unreadMessagesCount}</Typography>
                        </Box> : ''
                }
            </Box>
        </Root>
    )
}