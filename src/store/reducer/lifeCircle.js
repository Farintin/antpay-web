import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  themeMode: localStorage.getItem('mode') || 'light',
  isReady: false
}


export const counterSlice = createSlice({
  name: 'lifeCircle',
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload
    },
    setReady: (state) => {
      state.isReady = true
    }
  }
})
// Action creators are generated for each case reducer function
export const { setThemeMode, setReady } = counterSlice.actions

export default counterSlice.reducer
