import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"

import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

import { Root } from "./component"
import ChatItem from "../../components/ChatItem"





export default function () {
  const roomsDom = useRef(null)
  const { rooms, roomsMessages, totUnreadMsgs } = useSelector(state => state.roomsStates)
  const [renderRooms, setRenderRooms] = useState([])
  const [reRender, setReRender] = useState(false)



  const indexedRooms = (rooms) => {
    const roomsCopy = structuredClone(rooms)
    roomsCopy.forEach((room, i) => {
      room.index = i// `${i} - ${crypto.randomUUID()}`
    })
    return roomsCopy
  }
  const chatMsgsFilter = () => {
    const roomsMessagesCopy = structuredClone(roomsMessages)
    for (let roomId in roomsMessagesCopy.rooms) {
      if (roomId) {
        const room = roomsMessagesCopy.rooms[roomId]
        room.oldMessages = room.oldMessages.filter(comp => comp.component === 'chat-message')
        room.recentMessages = room.recentMessages.filter(comp => comp.component === 'chat-message')
      }
    }
    return roomsMessagesCopy
  }
  const recentRooms = ({ rooms, roomsMsgs }) => {
    // const roomsCopy = structuredClone(rooms)
    const roomsWithMsgs = rooms.filter(room => {
      const roomMsgs = roomsMsgs.rooms[room._id]
      const totMsgs = roomMsgs?.oldMessages.length + roomMsgs?.recentMessages.length
      return totMsgs > 0
    })
    
    const roomsWithNoMsgs = rooms.filter(room => {
      const roomMsgs = roomsMsgs.rooms[room._id]
      const totMsgs = roomMsgs?.oldMessages.length + roomMsgs?.recentMessages.length
      return totMsgs === 0
    })

    return { roomsWithMsgs, roomsWithNoMsgs }
  }
  const sortRooms = ({ rooms, roomsMsgs }) => {
    // sort rooms by lastest chat in descending order 
    rooms.sort((a,b) => {
      const aRoomMsgs = roomsMsgs.rooms[a._id]
      const bRoomMsgs = roomsMsgs.rooms[b._id]
      const aMsgs = [...aRoomMsgs.oldMessages, ...aRoomMsgs.recentMessages]
      const bMsgs = [...bRoomMsgs.oldMessages, ...bRoomMsgs.recentMessages]
      const aTime = aMsgs[aMsgs.length - 1].time
      const bTime = bMsgs[bMsgs.length - 1].time
      return new Date(bTime) - new Date(aTime)
    })
    return rooms
  }

  const roomsHandler = ({ rooms }) => {
    rooms = indexedRooms(rooms)
    setRenderRooms(rooms)
  }
  const recentHandler = () => {
    let roomsMsgs = chatMsgsFilter()
    const { roomsWithMsgs, roomsWithNoMsgs } = recentRooms({ rooms: renderRooms, roomsMsgs })
    const chatItemEls = roomsDom.current.querySelectorAll(`.chatItem`)

    const roomIdsWithNoMsgs = roomsWithNoMsgs.map(r => r._id)
    const roomsWithNoMsgsEls = Array.from(chatItemEls).filter(el => roomIdsWithNoMsgs.includes(el.dataset.roomid))
    roomsWithNoMsgsEls.forEach(el => el.classList.add('hide'))
    
    const roomIdsWithMsgs = roomsWithMsgs.map(r => r._id)
    const roomsWithMsgsEls = Array.from(chatItemEls).filter(el => roomIdsWithMsgs.includes(el.dataset.roomid))
    const rooms = sortRooms({ rooms: roomsWithMsgs, roomsMsgs })
    roomsWithMsgsEls.forEach(el => roomsDom.current.removeChild(el))
    rooms.forEach(r => {
      const chatItemEl = roomsWithMsgsEls.find(el => el.dataset.roomid === r._id)
      roomsDom.current.appendChild(chatItemEl)
      chatItemEl.classList.remove('hide')
    })
  }



  useEffect(() => {
    roomsHandler({ rooms })
  }, [])
  
  useEffect(() => {
    setReRender(true)
  }, [rooms])

  useEffect(() => {
    if (reRender) {
      roomsHandler({ rooms })
      setReRender(false)
      // console.log('reRender@[roomsMessages]')
    } else {
      recentHandler()
    }
  }, [roomsMessages])

  useEffect(() => {
    recentHandler()
  }, [renderRooms])

  useEffect(() => {
    if (reRender) {
      const roomsSize = rooms.length
      const roomsMsgsSize = Object.keys(roomsMessages.rooms).length
      // console.log({ roomsSize, roomsMsgsSize });
      if (roomsSize === roomsMsgsSize) {
        roomsHandler({ rooms })
      }

      // console.log('reRender@[reRender]')
      setReRender(false)
    }
  }, [reRender])


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
            renderRooms.map(room => (
              <ChatItem 
                key={room.index}
                room={room}
                data-index={room.index}
                data-roomid={room._id}
                  />
            ))
          }
        </Box>

      </Box>
    </Root>
  )
}