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
  const singularity1Dom = useRef(null)
  const bottom1Dom = useRef(null)
  const singularity2Dom = useRef(null)
  const bottom2Dom = useRef(null)
  let [roomId, setRoomId] = useState('')
  let [roomEnter, setRoomEnter] = useState(false)
  let [messages, setMessages] = useState([])
  const [scrollToBottom, setScrollToBottom] = useState(false)
  let [newRoomMessage, setNewRoomMessage] = useState(null)
  let [unreadMessagesCount, setUnreadMessagesCount] = useState(0)
  let [showScrolldownButton, setShowScrolldownButton] = useState(false)
  const dispatch = useDispatch()
  


  const readMsgsHandler = (ids) => {
    if (ids.length > 0) {
      // console.log({ ids });
      dispatch(updateMessagesReciept3({ roomId, messageIds: ids, userPhoneNumber: userData.phone.number }))
      socket.emit('to-server-reciept-ping3', { roomId, messageIds: ids })
    }
  }

  let guestChatMessageEls = []
  const observer = new IntersectionObserver(
    entries => {
      let readMsgIds = []
      const guestMsgs = messages.filter(msg => (msg.reader === userData.phone.number))
      const lastMsg = guestMsgs[guestMsgs.length - 1]
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          const { chatMessageReciept, chatMessageId } = el.dataset

          if (Number(chatMessageReciept) < 3) {
            // console.log('flow 1');
            if (lastMsg._id === chatMessageId) {
              const unreadMsgsId = guestMsgs.filter(msg => (msg.reciept < 3)).map(msg => msg._id)
              unreadMsgsId.forEach(id => {
                if (!readMsgIds.includes(id)) readMsgIds.push(id)
              })
              // console.log('flow 2.1');
            } else {
              // console.log({ chatMessageId });
              readMsgIds.push(chatMessageId)
              // console.log('flow 2.2');
            }
          }
        }
      })
      // console.log('flow 3');
      // console.log({ readMsgIds });
      readMsgsHandler(readMsgIds)
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
    // console.log({ top, ch, sh }, '@scrollHandler');
    const bottom1 = top+ch
    const singularity1 = sh-100
    singularity1Dom.current.style.top = `${singularity1}px`
    bottom1Dom.current.style.top = `${bottom1}px`
    if (bottom1 >= singularity1 ) {
      setShowScrolldownButton(false)
    } else {
      setShowScrolldownButton(true)
    }

    if (bottom1 >= (sh-72)) {
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
          const bottom2 = top+ch+64
          const singularity2 = sh-100
          singularity2Dom.current.style.top = `${singularity2}px`
          bottom2Dom.current.style.top = `${bottom2}px`
          if (bottom2 >= singularity2) {
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
            }
            if (comp.component === 'checkpoint-terminal') {
              render = <ChatDateCheckpointTerminal
                        key={i}
                        time={comp.time}
                          />
            }
            if (comp.component === 'chat-message') {
              render = <ChatMessage
                key={i}
                message={comp}
                  />
            }

            return render
          })}
          <Box 
            style={{ 
              width: '100%', 
              height: 64, 
              // border: '1px solid #fff',
              // borderWidth: '1px 0 0 0'
            }}
              />
          <Box 
            ref={singularity1Dom}
            className="bound" 
            style={{ backgroundColor: '#f00' }} 
              />
          <Box 
            ref={bottom1Dom}
            className="bound" 
            style={{ backgroundColor: '#00f' }} 
              />
          <Box 
            ref={singularity2Dom}
            className="bound" 
            style={{ backgroundColor: '#ff0' }} 
              />
          <Box 
            ref={bottom2Dom}
            className="bound" 
            style={{ backgroundColor: '#0f0' }} 
              />
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