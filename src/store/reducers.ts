import { combineReducers } from 'redux'
import authReducer from 'pages/login/login.reducer'
import appReducer from 'pages/app.reducer'
import { notificationReducer } from 'pages/master-data/notification'

const store = combineReducers({
  app:appReducer,
  auth:authReducer,
  notificationMasterData:notificationReducer
})
export type IGlobalState = ReturnType<typeof store>

export default store