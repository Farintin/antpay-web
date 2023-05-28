import { createSlice } from '@reduxjs/toolkit'



export const userSignInSlice = createSlice({
  name: 'userSignInAuth',
  initialState: {
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
  },
  reducers: {
    setUserSignInState: (state, action) => {
      state.userSignInState = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { setUserSignInState } = userSignInSlice.actions

export default userSignInSlice.reducer