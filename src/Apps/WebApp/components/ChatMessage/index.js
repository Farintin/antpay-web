import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Box, Typography } from '@mui/material'
import { Root } from './component'
import TickIcon from '../icons/Tick.icon'
import TickDoubleIcon from '../icons/TickDouble.icon'



export default function({ message }) {
    const { userData } = useSelector(state => state.user)
    const { activeRoom } = useSelector(state => state.roomsStates)
    const [tick, setTick] = useState('')

    let { media, text, time, reciept } = message
    time = new Date(time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    
    let className = 'chatMessage'
    if (message.author === activeRoom.contact.phone.number) {
        className = `${className} guest`
    } else if (message.author === userData.phone.number) {
        className = `${className} host`
    }

    useEffect(() => {
        switch (reciept) {
            case 1:
                setTick(<TickIcon width={13} color="#fff" />)
                break;
                
            case 2:
                setTick(<TickDoubleIcon width={16} color="#fff" />)
                break;
                
            case 3:
                setTick(<TickDoubleIcon width={16} />)
                break;
        
            default:
                break;
        }
    }, [message])

    return (
        <Root
            data-chat-message-id={message._id}
            data-chat-message-reciept={message.reciept}
            className={className}
        >
            <Box className="main">
                <Box className="msgBox">
                    <Box className="media">{media}</Box>
                    <Typography className="text">{text}</Typography>
                </Box>
                <Box className="info">
                    <Box className="time">
                        <Typography className="text">{time}</Typography>
                    </Box>
                    <Box className="reciept">{tick}</Box>
                </Box>
            </Box>
        </Root>
    )
}