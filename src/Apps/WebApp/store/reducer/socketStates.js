import { createSlice } from '@reduxjs/toolkit'





const initialState = {
  // openedAppAt: `${new Date(Date.now())}`,
  // server: 'https://localhost:5000/v1',
  server: 'https://antpay-chat-server.onrender.com/v1',
  isOnline: navigator.onLine,
  isConnected: null,
  newMessage: null,
  recieptPing1: null,
  recieptPing2: null,
  recieptPing3: null,
  newConversation: false
}

export const socketStatesSlice = createSlice({
  name: 'socketStates',
  initialState,
  reducers: {
    resetSocketStates: () => initialState,

    setIsOnline: (state, action) => {
      state.isOnline = action.payload
    },

    setIsConnected: (state, action) => {
      state.isConnected = action.payload
    },

    setOldMessages: (state, action) => {
      state.oldMessages = action.payload
    },

    setNewMessage: (state, action) => {
      state.newMessage = action.payload
    },
    
    setRecieptPing1: (state, action) => {
      state.recieptPing1 = action.payload
    },
    
    setRecieptPing2: (state, action) => {
      state.recieptPing2 = action.payload
    },

    setRecieptPing3: (state, action) => {
      state.recieptPing3 = action.payload
    },

    setNewConversation: (state, action) => {
      state.newConversation = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { 
  resetSocketStates,
  setIsOnline,
  setIsConnected, 
  setOldMessages,
  setNewMessage,
  setRecieptPing1,
  setRecieptPing2,
  setRecieptPing3,
  setNewConversation } = socketStatesSlice.actions

export default socketStatesSlice.reducer