import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { Root } from "./component"

import ChatMessage from "../../components/ChatMessage"

import { socket } from '../../socket'





export default function ({ style, className }) {
  const { activeRoom, recentRoomMessages, openedAppAt } = useSelector(state => state.socketStates)
  const [guestPhoneNumber, setGuestPhoneNumber] = useState(null)
  const [messages, setMessages] = useState([])
  
  
  useEffect(() => {
    if (activeRoom) {
      // console.log('activeRoom:', activeRoom, '"@[activeRoom] if (activeRoom) {"');
      setGuestPhoneNumber(activeRoom.guest.phone.number)
    }
  }, [activeRoom])

  useEffect(() => {
    if (activeRoom && guestPhoneNumber) {
      setMessages(recentRoomMessages[guestPhoneNumber])
    }
  }, [recentRoomMessages])
  
  useEffect(() => {
    // console.log('messages:', messages);
  }, [messages])
  
  useEffect(() => {
    if (guestPhoneNumber) {
      if (recentRoomMessages[guestPhoneNumber].length === 0) {
        socket.emit('retrieve-chat-messages', {
          beforeTime: openedAppAt,
          roomType: activeRoom.roomType,
          usersPhoneNumber: [activeRoom.guest.phone.number, activeRoom.host.phone.number],
        })
      }
      setMessages(recentRoomMessages[guestPhoneNumber])
    }
  }, [guestPhoneNumber])

  return (
    <Root 
      style={style}
      className={className}
    >
      {messages.map((message, i) => (
        <ChatMessage
          key={i}
          className={message.author === guestPhoneNumber ? 'guest' : 'host'}
          message={{
            text: message.text,
            time: new Date(message.time),
            reciept: message.reciept
          }}
            />
      ))}
      {/* <ChatMessage
        className={'guest'}
        message={{
          text: 'Let me send you some cash Let me send you some cash Let me send you some cash Let me send you some cash Let me send you some cash',
          time: '11:45 PM'
        }}
          />
      <ChatMessage 
        className={'host'}
        message={{
          text: 'Let me send you some cash Let me send you some cash Let me send you some cash Let me send you some cash Let me send you some cash',
          time: '11:45 PM'
        }}
          />
      <ChatMessage 
        className={'guest'}
        message={{
          text: 'Let me send you some cash',
          time: '11:45 PM'
        }}
          />
      <ChatMessage 
        className={'host'}
        message={{
          text: 'Let me send you some cash',
          time: '11:45 PM'
        }}
      /> */}
    </Root>
  )
}