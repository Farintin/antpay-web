import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import Box from "@mui/material/Box"

import { Root } from "./component"
import ChatRoomHeader from "../ChatRoomHeader"
import ChatRoomBody from "../ChatRoomBody"
import ChatRoomFooter from "../ChatRoomFooter"





export default function () {
  const { activeRoom } = useSelector(state => state.roomsStates)
  let [showHeader, setShowHeader] = useState(false)
  let [showFooter, setShowFooter] = useState(false)
  
  useEffect(() => {
    if (activeRoom) {
      setShowFooter(true)
      setShowHeader(true)
    }
  }, [activeRoom])

  return (
    <Root>
      <Box className="wrapper">
        
        {showHeader ? <ChatRoomHeader /> : ''}
        <ChatRoomBody />
        {showFooter ? <ChatRoomFooter /> : ''}

      </Box>
    </Root>
  )
}