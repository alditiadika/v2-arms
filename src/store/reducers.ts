import { combineReducers } from 'redux'
import authReducer from 'pages/login/login.reducer'
import appReducer from 'pages/app.reducer'

const store = combineReducers({
  app:appReducer,
  auth:authReducer
})
export type IGlobalState = ReturnType<typeof store>

export default store