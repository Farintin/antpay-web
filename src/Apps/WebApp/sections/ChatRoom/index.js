import Box from "@mui/material/Box"

import { Root } from "./component"
import ChatRoomHeader from "../ChatRoomHeader"
import ChatRoomBody from "../ChatRoomBody"
import ChatRoomFooter from "../ChatRoomFooter"





export default function () {
  return (
    <Root>
      <Box className="wrapper">
        
        <ChatRoomHeader />
        <ChatRoomBody
          // className="show-boundary"
            />
        <ChatRoomFooter />

      </Box>
    </Root>
  )
}