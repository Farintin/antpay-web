import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import { Root } from "./component"
import ChatItem from "../../components/ChatItem"
import { chats } from "../../resource/contacts"



export default function () {
  return (
    <Root>
      <Box className="wrapper">

        <Box className="row row-1">
          <Typography 
            className="text"
          >
            7 unread
          </Typography>
        </Box>
        <Box className="row row-2">
          {chats.map((contact, i) => (
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