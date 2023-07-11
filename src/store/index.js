import { configureStore } from '@reduxjs/toolkit'
// import { createReduxHistoryContext } from 'redux-first-history'
// import { createBrowserHistory } from "history"
import { 
  lifeCircle,
} from './reducer'
import { 
  userSignInState as userSignInAuth, 
  user, 
  contacts, 
  socketStates, 
  roomsStates } from '../Apps/WebApp/store/reducer'



export const store = configureStore({
  reducer: {
    userSignInAuth,
    lifeCircle,
    user,
    contacts,
    socketStates,
    roomsStates
  }
})
