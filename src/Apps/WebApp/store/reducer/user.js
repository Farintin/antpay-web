import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: null
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions

export default userSlice.reducer