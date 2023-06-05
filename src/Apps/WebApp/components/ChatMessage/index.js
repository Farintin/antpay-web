import { Box, Typography } from '@mui/material'
import { Root } from './component'



export default function({ message, className }) {
    const { media, text, time, reciept } = message
    const hour = time.getHours()
    const minute = time.getMinutes()

    return (
        <Root
            className={className}
        >
            <Box className="main">
                <Box className="msgBox">
                    <Box className="media">{media}</Box>
                    <Typography className="text">{text}</Typography>
                </Box>
                <Box className="info">
                    <Typography className="time">{hour}:{minute}</Typography>
                    <Box className="reciept">{reciept}</Box>
                </Box>
            </Box>
        </Root>
    )
}