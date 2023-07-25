import React, { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"

import { Root } from "./component"

import ChatMessage from "../../components/ChatMessage"
import ChatDateCheckpoint from "../../components/ChatDateCheckpoint"
import ChatDateCheckpointTerminal from "../../components/ChatDateCheckpointTerminal"
import ScrolldownButton from "../../components/ScrolldownButton"

import { setShowRoomGuestContactProfile } from '../../store/reducer/contacts'
import { updateMessagesReciept3 } from "../../store/reducer/roomsStates"

import { socket } from '../../socket'





export default function ({ style, className }) {
  const { userData } = useSelector(state => state.user)
  const { newMessage } = useSelector(state => state.socketStates)
  const { activeRoom, roomsMessages, roomsUnreadMessagesCount } = useSelector(state => state.roomsStates)
  const rootDom = useRef(null)
  let [roomId, setRoomId] = useState('')
  let [roomEnter, setRoomEnter] = useState(false)
  let [messages, setMessages] = useState([])
  const [scrollToBottom, setScrollToBottom] = useState(false)
  let [newRoomMessage, setNewRoomMessage] = useState(null)
  let [unreadMessagesCount, setUnreadMessagesCount] = useState(0)
  let [showScrolldownButton, setShowScrolldownButton] = useState(false)
  const dispatch = useDispatch()
  

  let guestChatMessageEls = []
  const observer = new IntersectionObserver(
    entries => {
      let readMsgIds = []
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          if (Number(el.dataset.chatMessageReciept) < 3) {
            readMsgIds.push(el.dataset.chatMessageId)
          }
          observer.unobserve(entry.target)
        }
      })
        
      if (readMsgIds.length > 0) {
        dispatch(updateMessagesReciept3({ roomId, messageIds: readMsgIds, userPhoneNumber: userData.phone.number }))
        socket.emit('to-server-reciept-ping3', { roomId, messageIds: readMsgIds })
      }
    },
    {
      threshold: .45
    }
  )

  const scrollHandler = ({ scrollToBottom }) => {
    const timeCheckpointEls = rootDom.current.querySelectorAll('.timeCheckpoint')
    timeCheckpointEls.forEach((el) => {
      const checkpointDate = el.dataset.date
      rootDom.current.querySelectorAll('.timeCheckpointTerminal').forEach(terminalEl => {
        if (checkpointDate === terminalEl.dataset.date) {
          if (el.offsetTop > terminalEl.offsetTop) {
            el.classList.add('invisible')
          } else {
            el.classList.remove('invisible')
          }
        }
      })
    })
    
    let ch = rootDom.current.clientHeight
    let sh = rootDom.current.scrollHeight
    let top = rootDom.current.scrollTop
    if ((top+ch) >= (sh-(ch*.2))) {
      // console.log('singularity');
      setShowScrolldownButton(false)
    } else {
      setShowScrolldownButton(true)
    }
    if ((top+ch) >= (sh-72)) {
      // console.log({ scrollToBottom })
      // console.log('padding-bottom', { sh, sb: top + ch });
      if (scrollToBottom === true) {
        setScrollToBottom(null)
      }
      if (scrollToBottom === null) {
        setScrollToBottom(false)
      }
    }
  }
  const scrolldownButtonClickHandler = () => {
    scrollToBottom === true ? setScrollToBottom(0) : setScrollToBottom(true)
  }


  useEffect(() => {
    if (activeRoom) {
      setRoomEnter(true)
    }
  }, [activeRoom])
  
  useEffect(() => {
    if (roomEnter) {
      const roomId = activeRoom._id
      setRoomId(roomId)
      dispatch(setShowRoomGuestContactProfile(false))

      const room = roomsMessages.rooms[roomId]
      const messages = [...room.oldMessages, ...room.recentMessages]
      setMessages(messages)
    }
  }, [roomEnter])

  useEffect(() => {
    if (roomId) {
      if (roomId === roomsMessages.lastModifiedRoom) {
        const room = roomsMessages.rooms[roomId]
        const messages = [...room.oldMessages, ...room.recentMessages]
        setMessages(messages)
      }
    }
  }, [roomsMessages])
  
  useEffect(() => {
    if (roomId) {
      if (roomId === roomsUnreadMessagesCount.lastModifiedRoom || roomsUnreadMessagesCount.lastModifiedRoom === null) {
        const count = roomsUnreadMessagesCount.rooms[roomId]
        setUnreadMessagesCount(count)
      }
    }
  }, [roomsUnreadMessagesCount])

  useEffect(() => {
    if (newMessage) {
      if (newMessage.roomId === roomId) {
        setNewRoomMessage(newMessage)
      }
    }
  }, [newMessage])
  
  useEffect(() => {
    if (scrollToBottom === true || scrollToBottom === null) {
      rootDom.current.scrollTop = rootDom.current.scrollHeight
    }
    if (scrollToBottom === 0) {
      setScrollToBottom(true)
    }
  }, [scrollToBottom])

  useEffect(() => {
    if (roomEnter) {
      scrollToBottom === true ? setScrollToBottom(0) : setScrollToBottom(true)
      setRoomEnter(false)
    }

    if (messages.length > 0) {
      if (guestChatMessageEls.length > 0) guestChatMessageEls.forEach(el => observer.unobserve(el))
      guestChatMessageEls = rootDom.current.querySelectorAll('.chatMessage.guest')
      if (guestChatMessageEls.length > 0) guestChatMessageEls.forEach(el => observer.observe(el))

      let ch = rootDom.current.clientHeight
      let sh = rootDom.current.scrollHeight
      let top = rootDom.current.scrollTop
      // console.log({ ch, sh });
      if (sh > ch) {
        rootDom.current.classList.add('scrollbarIsVisible')
      } else {
        rootDom.current.classList.remove('scrollbarIsVisible')
      }

      if (newRoomMessage) {
        if (newRoomMessage.reciept === 0) {
          setScrollToBottom(true)
        } else {
          if ((top+ch) >= (sh-(ch*.2))) {
            setScrollToBottom(true)
          }
        }

        setNewRoomMessage(null)
      }
    }
  }, [messages])
  
  return (
    <Root 
      ref={rootDom}
      onScroll={() => scrollHandler({ scrollToBottom })}
      style={style}
      className={className}
    >
      <Box className="wrapper">
        <Box className="main">
          {messages.map((comp, i) => {
            let render
            if (comp.component === 'checkpoint') {
              render = <ChatDateCheckpoint
                        key={i}
                        time={comp.time}
                          />
            } else if (comp.component === 'checkpoint-terminal') {
              render = <ChatDateCheckpointTerminal
                        key={i}
                        time={comp.time}
                          />
            } else {
              render = <ChatMessage
                key={i}
                message={comp}
                  />
            }

            return render
          })}
          <Box style={{ width: '100%', height: 64 }} />
        </Box>
      </Box>
      
      {
        showScrolldownButton ? 
          <ScrolldownButton 
            unreadMessagesCount={unreadMessagesCount}
            onClick={scrolldownButtonClickHandler}
              /> : ''
      }

    </Root>
  )
}