import { createSlice } from '@reduxjs/toolkit'





export const socketStatesSlice = createSlice({
  name: 'socketStates',
  initialState: {
    openedAppAt: `${new Date(Date.now())}`,
    isConnected: null,
    oldRoomMessages: {},
    recentRoomMessages: {},
    newMessage: false,
    activeRoom: null
  },
  reducers: {
    setIsConnected: (state, action) => {
      state.isConnected = action.payload
    },

    setOldRoomMessages: (state, action) => {
      const messages = action.payload
      if (messages.length > 0) {
        const roomMessages = state.recentRoomMessages[messages[0].author] || state.recentRoomMessages[messages[0].reader]
        roomMessages.unshift(...messages)
      }
    },

    initRecentRoomMessages: (state, action) => {
      const contact = action.payload
      const { number } = contact.phone
      state.recentRoomMessages[number] = []
    },
    setRecentRoomMessages: (state, action) => {
      const roomMsg = action.payload
      const { message } = roomMsg

      const roomMessages = state.recentRoomMessages[message.author] || state.recentRoomMessages[message.reader]

      /* replace room messages with matching sid (applied only to author) */
      const msgIndex = roomMessages.findIndex(msg => (msg.sid === message.sid))
      msgIndex ? roomMessages[msgIndex] = message : ''

      roomMessages.push(message)
    },
    
    setChatMessageRecieptOnReaderRecieved: (state, action) => {
      const data = action.payload

      const roomMessages = state.recentRoomMessages[data.usersPhoneNumber[0]] || state.recentRoomMessages[data.usersPhoneNumber[1]]

      // replace room messages with matching id
      const msgIndex = roomMessages.findIndex(msg => (msg.id === data.messageId))
      roomMessages[msgIndex].reciept = 2
    },

    setNewMessage: (state, action) => {
      state.newMessage = action.payload
    },
    
    setActiveRoom: (state, action) => {
      state.activeRoom = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { 
  setIsConnected, 
  
  initOldRoomMessages,
  setOldRoomMessages,

  initRecentRoomMessages,
  setRecentRoomMessages,

  setChatMessageRecieptOnReaderRecieved,

  setNewMessage,
  setActiveRoom } = socketStatesSlice.actions

export default socketStatesSlice.reducer