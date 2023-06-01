import { useEffect } from "react"
import { useSelector } from "react-redux"

import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

import { Root } from "./component"

import ChatItem from "../../components/ChatItem"

// import { chats } from "../../resource/contacts"





export default function () {
  const { contacts } = useSelector(state => state.contacts)

  useEffect(() => {
    // console.log('contacts:', contacts);
  }, [contacts])


  return (
    <Root>
      <Box className="wrapper">

        <Box className="row row-1 ui-ignore">
          <Typography 
            className="text"
          >
            7 unread
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