import { createSlice } from '@reduxjs/toolkit'





const initialState = {
  contacts: null,
  showRoomGuestContactProfile: false,
  openUserProfile: false,
  openEditUserProfile: false,
  openPhonebook: false,
  inAppMessage: null,
  inAppError: null
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    resetContactStates: () => initialState,

    setContacts: (state, action) => {
      state.contacts = action.payload
    },

    setShowRoomGuestContactProfile: (state, action) => {
      state.showRoomGuestContactProfile = action.payload
    },
    
    setOpenUserProfile: (state, action) => {
      state.openUserProfile = action.payload
    },
    
    setOpenEditUserProfile: (state, action) => {
      state.openEditUserProfile = action.payload
    },

    setOpenPhonebook: (state, action) => {
      state.openPhonebook = action.payload
    }, 

    setInAppMessage: (state, action) => {
      state.inAppMessage = action.payload
    },
    
    setInAppError: (state, action) => {
      state.inAppError = action.payload
    },
    
    setInAppOnlineError: (state) => {
      state.inAppError = 'computer is not connected'
    }
  }
})


// Action creators are generated for each case reducer function
export const { 
  resetContactStates,
  
  setContacts, 

  setShowRoomGuestContactProfile, 
  setOpenUserProfile, 
  setOpenEditUserProfile, 
  setOpenPhonebook,

  setInAppMessage,
  setInAppError,
  setInAppOnlineError } = contactsSlice.actions

export default contactsSlice.reducer