import { configureStore } from '@reduxjs/toolkit'
// import { createReduxHistoryContext } from 'redux-first-history'
// import { createBrowserHistory } from "history"
import { 
  userSignInState as userSignInAuth, 
  lifeCircle,
  user,
  contacts,
  socketStates
} from './reducer'

export const store = configureStore({
  reducer: {
    userSignInAuth,
    lifeCircle,
    user,
    contacts,
    socketStates
  }
})
