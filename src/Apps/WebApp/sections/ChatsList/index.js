import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

import { Root } from "./component"
import ChatItem from "../../components/ChatItem"

import { setRoomsMessages } from '../../store/reducer/roomsStates'





export default function () {
  const roomsDom = useRef(null)
  const { rooms, roomsMessages, totUnreadMsgs } = useSelector(state => state.roomsStates)
  const [roomsRender, setRoomsRender] = useState([])
  const [roomsOrder, setRoomsOrder] = useState(null)
  const dispatch = useDispatch()



  const recentRooms = ({ rooms }) => {
    const roomsMessagesCopy = structuredClone(roomsMessages)
    const roomsCopy = structuredClone(rooms)

    for (let roomId in roomsMessagesCopy.rooms) {
      if (roomId) {
        const room = roomsMessagesCopy.rooms[roomId]
        room.oldMessages = room.oldMessages.filter(comp => comp.component === 'chat-message')
        room.recentMessages = room.recentMessages.filter(comp => comp.component === 'chat-message')
      }
    }
    
    let roomsWithChatMessages = roomsCopy.filter(room => {
      const roomMessages = roomsMessagesCopy.rooms[room._id]
      const totMsgs = roomMessages?.oldMessages.length + roomMessages?.recentMessages.length
      return totMsgs > 0
    })
    
    // sort rooms by lastest chat in descending order 
    roomsWithChatMessages.sort((a,b) => {
      const aRoomMsgs = roomsMessagesCopy.rooms[a._id]
      const bRoomMsgs = roomsMessagesCopy.rooms[b._id]
      const aMsgs = [...aRoomMsgs.oldMessages, ...aRoomMsgs.recentMessages]
      const bMsgs = [...bRoomMsgs.oldMessages, ...bRoomMsgs.recentMessages]
      const aTime = aMsgs[aMsgs.length - 1].time
      const bTime = bMsgs[bMsgs.length - 1].time
      return new Date(bTime) - new Date(aTime)
    })

    return roomsWithChatMessages
  }
  const assignIndexToRooms = (rooms) => {
    const roomsCopy = structuredClone(rooms)
    roomsCopy.forEach((room, i) => {
      room.index = `${i} - ${crypto.randomUUID()}`
    })

    return roomsCopy
  }

  const recentRoomsHandler = () => {
    let roomsWithNewIndex = assignIndexToRooms(rooms)
    const roomsRender = recentRooms({ rooms: roomsWithNewIndex })

    setRoomsRender(roomsRender)
  }
  const roomsOrderHandler = () => {
    let rooms = recentRooms({ rooms: roomsRender })
    const roomsIndexes = rooms.map(r => r.index)
    setRoomsOrder(roomsIndexes)
  }
  const roomsOrderDomHandler = () => {
    if (roomsOrder?.length > 0) {
      roomsOrder.forEach(i => {
        const chatItemEls = roomsDom.current.querySelectorAll(`.chatItem`)
        let chatItemEl
        chatItemEls.forEach(el => {
          if (el.dataset.index === i) chatItemEl = el
        })
        if (chatItemEl) {
          roomsDom.current.removeChild(chatItemEl)
          roomsDom.current.appendChild(chatItemEl)
        }
      })
    }
  }



  useEffect(() => {
    recentRoomsHandler()
    // console.log('recentRoomsHandler @[]');
  }, [])

  useEffect(() => {
    roomsOrderHandler()
    // console.log('roomsOrderHandler @[roomsMessages]');
    if (roomsMessages) {
      const roomsMessagesCopy = structuredClone(roomsMessages)
      const { rooms, lastModifiedRoom } = roomsMessagesCopy
      if (lastModifiedRoom) {
        const room = rooms[lastModifiedRoom]
        if (room.newRoom) {
          recentRoomsHandler()
          // console.log('recentRoomsHandler @[roomsMessages]');
          room.newRoom = false
          dispatch(setRoomsMessages(roomsMessagesCopy))
        }
      }
    }
  }, [roomsMessages])

  useEffect(() => {
    if (roomsRender.length > 1) {
      roomsOrderHandler()
      // console.log('roomsOrderHandler @[roomsMessages]');
    }
  }, [roomsRender])

  useEffect(() => {
    if (roomsOrder?.length > 1) roomsOrderDomHandler()
  }, [roomsOrder])


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
        <Box 
          ref={roomsDom}
          className="row row-2"
        >
          {
            roomsRender.map(room => (
              <ChatItem 
                key={room.index}
                data-index={room.index}
                room={room}
                  />
            ))
          }
        </Box>

      </Box>
    </Root>
  )
}