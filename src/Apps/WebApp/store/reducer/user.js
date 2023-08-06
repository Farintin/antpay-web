import { createSlice } from '@reduxjs/toolkit'





const initialState = {
  userData: null,
  logOut: false,
  showLogoutModal: false
}

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    resetUserStates: () => initialState,

    setUserData: (state, action) => {
      state.userData = action.payload
    },
    setLogOut: (state, action) => {
      state.logOut = action.payload
    },
    setShowLogoutModal: (state, action) => {
      state.showLogoutModal = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { 
  resetUserStates,
  setUserData, 
  setLogOut,
  setShowLogoutModal } = userSlice.actions

export default userSlice.reducer