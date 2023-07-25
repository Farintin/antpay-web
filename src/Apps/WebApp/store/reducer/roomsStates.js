import { createSlice } from '@reduxjs/toolkit'



export const roomsStatesSlice = createSlice({
  name: 'roomsStates',
  initialState: {
    rooms: null,
    activeRoom: null,
    roomsMessages: null,
    roomsTextInputValue: null,
    roomsUnreadMessagesCount: null,
    totUnreadMsgs: 0,
    typing: false,
    roomGuestOnline: null,
    roomGuestTyping: null,
    sendRoomOnlineHandshake: null,
    roomsGuestIndication: null
  },
  reducers: {
    setRooms: (state, action) => {
      const roomsData = action.payload
      state.rooms = roomsData.map(roomData => {
        const { _id, usersPhoneNumber, roomType } = roomData
        return { _id, usersPhoneNumber, roomType }
      })
    },

    setRoomsGuestIndication: (state, action) => {
      state.roomsGuestIndication = action.payload
    },
    
    setRoomsMessages: (state, action) => {
      state.roomsMessages = action.payload
    },

    setRoomMessages: (state, action) => {
      const message = action.payload
      const messageCopy = structuredClone(message)
      messageCopy.component = 'chat-message'
      const { roomId } = messageCopy
      const room = state.roomsMessages.rooms[roomId]
      let { recentMessages } = room
      
      if (recentMessages.length > 0) {
        recentMessages.reverse()
        const i = recentMessages.findIndex(msg => (msg.component === 'chat-message' && new Date(msg.time).getTime() <= new Date(messageCopy.time).getTime()))
        if (i !== -1) {
          if (new Date(recentMessages[i].time).getDate() !== new Date(messageCopy.time).getDate()) {
            recentMessages.splice(i, 0, { component: 'checkpoint-terminal', time: recentMessages[i].time })
            recentMessages.splice(i, 0, { component: 'checkpoint', time: messageCopy.time })
          }
          recentMessages.splice(i, 0, messageCopy)
        }
        recentMessages.reverse()
      } else if (room.oldMessages.length > 0) {
        const { oldMessages } = room
        if (oldMessages.length > 0) {
          const lastMessage = oldMessages[oldMessages.length - 1]
          if (new Date(lastMessage.time).getDate() !== new Date(messageCopy.time).getDate()) {
            recentMessages.push({ component: 'checkpoint-terminal', time: lastMessage.time })
            recentMessages.push({ component: 'checkpoint', time: messageCopy.time })
          }
        }
        recentMessages.push(messageCopy)
      } else {
        recentMessages.push({ component: 'checkpoint', time: messageCopy.time })
        recentMessages.push(messageCopy)
      }

      state.roomsMessages.lastModifiedRoom = roomId
    },

    setRoomsTextInputValue: (state, action) => {
      state.roomsTextInputValue = action.payload
    },
    
    setRoomTextInputValue: (state, action) => {
      const { roomId, value } = action.payload
      state.roomsTextInputValue[roomId] = value
    },
    
    setRoomsUnreadMessagesCount: (state, action) => {
      state.roomsUnreadMessagesCount = action.payload
    },

    incrementRoomUnreadMessagesCount: (state, action) => {
      const { roomId } = action.payload
      state.roomsUnreadMessagesCount.rooms[roomId] += 1
      state.roomsUnreadMessagesCount.lastModifiedRoom = roomId
    },

    decrementRoomUnreadMessagesCount: (state, action) => {
      const { roomId, count } = action.payload
      const { rooms } = state.roomsUnreadMessagesCount
      rooms[roomId] <= 0 ? rooms[roomId] = 0 : rooms[roomId] -= count
      state.roomsUnreadMessagesCount.lastModifiedRoom = roomId
    },
    
    setTotUnreadMsgs: (state, action) => {
      state.totUnreadMsgs = action.payload
    },
    
    updateMessageReciept1: (state, action) => {
      const message = action.payload
      const messageCopy = structuredClone(message)
      messageCopy.component = 'chat-message'
      const { roomId } = messageCopy
      const room = state.roomsMessages.rooms[roomId]
      let messages = room.recentMessages

      let i = messages.findIndex(msg => (msg.sid === messageCopy.sid && msg.time === messageCopy.time))

      if (messageCopy.sid && messageCopy.reciept > 0) {
        delete messageCopy.sid
      }

      if (i !== -1) {
        // replace room message matching sid (applied only to author)
        messages[i] = messageCopy

        state.roomsMessages.lastModifiedRoom = roomId
      }
    },
    
    updateMessageReciept2: (state, action) => {
      const data = action.payload
      const { roomId } = data
      const room = state.roomsMessages.rooms[roomId]
      let messages = room.recentMessages

      let i = messages.findIndex(msg => (msg._id === data._id))
      if (i === -1) {
        messages = room.oldMessages
        i = messages.findIndex(msg => (msg._id === data._id))
      }

      if (i !== -1) {
        messages[i].reciept = 2

        state.roomsMessages.lastModifiedRoom = roomId
      }
    },

    updateMessageReciept3: (state, action) => {
      const data = action.payload
      const { roomId, userPhoneNumber } = data
      const room = state.roomsMessages.rooms[roomId]
      const roomsCount = state.roomsUnreadMessagesCount.rooms
      let messages = room.recentMessages

      let i = messages.findIndex(msg => (msg._id === data._id))
      if (i === -1) {
        messages = room.oldMessages
        i = messages.findIndex(msg => (msg._id === data._id))
      }

      if (i !== -1) {
        if (messages[i].reciept < 3) {
          messages[i].reciept = 3
          if (messages[i].reader === userPhoneNumber) {
            roomsCount[roomId] <= 0 ? roomsCount[roomId] = 0 : roomsCount[roomId] -= 1
            state.roomsUnreadMessagesCount.lastModifiedRoom = roomId
          }
  
          state.roomsMessages.lastModifiedRoom = roomId
        }
      }
    },

    updateMessagesReciept3: (state, action) => {
      const data = action.payload
      const { roomId, messageIds, userPhoneNumber } = data
      const room = state.roomsMessages.rooms[roomId]
      const roomsCount = state.roomsUnreadMessagesCount.rooms

      let op
      let earliestMsg = null
      let matchedMessages = room.recentMessages.filter(msg => {
        op = false
        if (messageIds.includes(msg._id)) {
          if (!earliestMsg) {// check earlist msg
            earliestMsg = msg
          } else if (new Date(earliestMsg.time).getTime() < new Date(msg.time).getTime()) {// check earlist msg
            earliestMsg = msg
          }

          if (msg.reciept < 3) {
            msg.reciept = 3
            if (msg.reader === userPhoneNumber) {
              roomsCount[roomId] <= 0 ? roomsCount[roomId] = 0 : roomsCount[roomId] -= 1
              state.roomsUnreadMessagesCount.lastModifiedRoom = roomId
            }
          }

          op = true
        }
        return op
      })

      if (matchedMessages.length === 0) {
        earliestMsg = null
        room.oldMessages.forEach(msg => {
          if (messageIds.includes(msg._id)) {
            if (!earliestMsg) {// check earlist msg
              earliestMsg = msg
            } else if (new Date(earliestMsg.time).getTime() < new Date(msg.time).getTime()) {// check earlist msg
              earliestMsg = msg
            }

            if (msg.reciept < 3) {
              msg.reciept = 3
              if (msg.reader === userPhoneNumber) {
                roomsCount[roomId] <= 0 ? roomsCount[roomId] = 0 : roomsCount[roomId] -= 1
                state.roomsUnreadMessagesCount.lastModifiedRoom = roomId
              }
            }
          }
        })

        if (earliestMsg) {
          room.oldMessages.forEach(msg => {
            if (new Date(earliestMsg.time).getTime() > new Date(msg.time).getTime()) {// check earlist msg
              if (msg.reciept < 3) {
                msg.reciept = 3
              }
            }
          })
        }
      } else {
        room.recentMessages.forEach(msg => {
          if (new Date(earliestMsg.time).getTime() > new Date(msg.time).getTime()) {// check earlist msg
            if (msg.reciept < 3) {
              msg.reciept = 3
            }
          }
        })
      }

      state.roomsMessages.lastModifiedRoom = roomId
    },
    
    setActiveRoom: (state, action) => {
      state.activeRoom = action.payload
    },

    setRoomGuestOnline: (state, action) => {
      const { roomId, online, handshake } = action.payload
      const room = state.roomsGuestIndication.rooms[roomId]
      room.guestOnline = online
      if (!handshake) {
        state.sendRoomGuestOnlineHandshake = roomId
      }

      state.roomsGuestIndication.lastModifiedRoom = roomId
    },
    
    setRoomGuestTyping: (state, action) => {
      const { roomId, typing } = action.payload
      const room = state.roomsGuestIndication.rooms[roomId]
      room.guestTyping = typing

      state.roomsGuestIndication.lastModifiedRoom = roomId
    },

    setSendRoomGuestOnlineHandshake: (state, action) => {
      state.sendRoomGuestOnlineHandshake = action.payload
    },
    
    setTyping: (state, action) => {
      state.typing = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const {
  setRooms,
  setActiveRoom,

  setRoomMessages,
  setRoomTextInputValue,

  setRoomsUnreadMessagesCount,
  setUnreadMessagesCount,
  incrementRoomUnreadMessagesCount,
  decrementRoomUnreadMessagesCount,
  setTotUnreadMsgs,

  updateMessageReciept1,
  updateMessageReciept2,
  // updateMessageReciept3,
  updateMessagesReciept3,

  setTyping,
  setRoomsGuestIndication,
  setRoomsMessages,
  setRoomsTextInputValue,
  setRoomGuestOnline,
  setRoomGuestTyping,

  setSendRoomGuestOnlineHandshake} = roomsStatesSlice.actions

export default roomsStatesSlice.reducer