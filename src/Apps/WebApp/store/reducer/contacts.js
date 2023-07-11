import { createSlice } from '@reduxjs/toolkit'



export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    showRoomGuestContactProfile: false,
    contacts: null
  },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload
    },
    setShowRoomGuestContactProfile: (state, action) => {
      state.showRoomGuestContactProfile = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { setContacts, setShowRoomGuestContactProfile } = contactsSlice.actions

export default contactsSlice.reducer