import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

import { Root } from "./component"

import ChatItem from "../../components/ChatItem"





export default function () {
  const { contacts } = useSelector(state => state.contacts)
  const { roomsUnreadMessagesCount } = useSelector(state => state.roomsStates)
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0)

  useEffect(() => {
    if (roomsUnreadMessagesCount !== null) {
      const count = Object.values(roomsUnreadMessagesCount.rooms).reduce((t,n) => t+n)
      setUnreadMessagesCount(count)
    }
  }, [roomsUnreadMessagesCount])

  return (
    <Root>
      <Box className="wrapper">

        <Box className="row row-1">
          <Typography 
            className="text"
          >
            {`${unreadMessagesCount} unread`}
          </Typography>
        </Box>
        <Box className="row row-2">
          {contacts?.map((contact, i) => (
            <ChatItem 
              key={i}
              contact={contact}
              />
          ))}
        </Box>

      </Box>
    </Root>
  )
}