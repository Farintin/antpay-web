import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

import { Root } from "./component"
import ChatItem from "../../components/ChatItem"

import { setTotUnreadMsgs } from '../../store/reducer/roomsStates'





export default function () {
  const { rooms, roomsMessages, roomsUnreadMessagesCount, totUnreadMsgs } = useSelector(state => state.roomsStates)
  // const [unreadMessagesCount, setUnreadMessagesCount] = useState(0)
  const [recentRooms, setRecentRooms] = useState([])
  const dispatch = useDispatch()


  const recentRoomsHandler = () => {
    const roomsMessagesCopy = structuredClone(roomsMessages)
    for (let roomId in roomsMessagesCopy.rooms) {
      if (roomId) {
        const room = roomsMessagesCopy.rooms[roomId]
        room.oldMessages = room.oldMessages.filter(comp => comp.component === 'chat-message')
        room.recentMessages = room.recentMessages.filter(comp => comp.component === 'chat-message')
      }
    }
    
    let roomsWithChatMessages = rooms.filter(room => {
      const roomMessages = roomsMessagesCopy.rooms[room._id]
      const totMsgs = roomMessages.oldMessages.length + roomMessages.recentMessages.length
      return totMsgs > 0
    })
    
    roomsWithChatMessages.sort((a,b) => {
      const aRoomMsgs = roomsMessagesCopy.rooms[a._id]
      const bRoomMsgs = roomsMessagesCopy.rooms[b._id]
      const aMsgs = [...aRoomMsgs.oldMessages, ...aRoomMsgs.recentMessages]
      const bMsgs = [...bRoomMsgs.oldMessages, ...bRoomMsgs.recentMessages]
      const aTime = aMsgs[aMsgs.length - 1].time
      const bTime = bMsgs[bMsgs.length - 1].time
      // console.log({ aTime, bTime })
      return new Date(bTime) - new Date(aTime)
    })
    // console.log({ roomsWithChatMessages });
    setRecentRooms(roomsWithChatMessages)
  }


  useEffect(() => {
    if (rooms && roomsMessages) {
      recentRoomsHandler()
    }
  }, [])

  useEffect(() => {
    if (rooms && roomsMessages) {
      recentRoomsHandler()
    }
  }, [roomsMessages])

  useEffect(() => {
    if (roomsUnreadMessagesCount !== null) {
      const count = Object.values(roomsUnreadMessagesCount.rooms).reduce((t,n) => t+n)
      dispatch(setTotUnreadMsgs(count))
    }
  }, [roomsUnreadMessagesCount])

  return (
    <Root>
      <Box className="wrapper">

        <Box className="row row-1">
          <Typography 
            className="text"
          >
            {`${totUnreadMsgs} unread`}
          </Typography>
        </Box>
        <Box className="row row-2">
          {
            recentRooms.map((room, i) => (
              <ChatItem 
                key={i}
                room={room}
                />
            ))
          }
        </Box>

      </Box>
    </Root>
  )
}