import { createSlice } from '@reduxjs/toolkit'





const initialState = {
  userSignInState: {
    phone: {
      countryName: '',
      countryCode: '',
      number: ''
    },
    avatar: '',
    name: '',
    desc: '',
    status: ''
  }
}

export const userSignInSlice = createSlice({
  name: 'userSignInAuth',
  initialState,
  reducers: {
    resetAuthStates: () => initialState,
    
    setUserSignInState: (state, action) => {
      state.userSignInState = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { 
  resetAuthStates,
  setUserSignInState } = userSignInSlice.actions

export default userSignInSlice.reducer