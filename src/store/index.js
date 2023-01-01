import { configureStore } from '@reduxjs/toolkit'
// import { createReduxHistoryContext } from 'redux-first-history'
// import { createBrowserHistory } from "history"
import { lifeCircle } from './reducer'

export const store = configureStore({
  reducer: {
    lifeCircle
  }
})
