import { createSlice } from '@reduxjs/toolkit'



export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: null
  },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { setContacts } = contactsSlice.actions

export default contactsSlice.reducer