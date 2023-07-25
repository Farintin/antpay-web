import { createSlice } from '@reduxjs/toolkit'





export const socketStatesSlice = createSlice({
  name: 'socketStates',
  initialState: {
    // openedAppAt: `${new Date(Date.now())}`,
    isOnline: navigator.onLine,
    isConnected: null,
    newMessage: null,
    recieptPing1: null,
    recieptPing2: null,
    recieptPing3: null
  },
  reducers: {
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
    }
  }
})


// Action creators are generated for each case reducer function
export const { 
  setIsOnline,
  setIsConnected, 
  setOldMessages,
  setNewMessage,
  setRecieptPing1,
  setRecieptPing2,
  setRecieptPing3 } = socketStatesSlice.actions

export default socketStatesSlice.reducer