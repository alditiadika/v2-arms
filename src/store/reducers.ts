import { combineReducers } from 'redux'
import authReducer from 'pages/login/auth.reducer'
import appReducer from 'pages/app.reducer'

const store = combineReducers({
  app:appReducer,
  auth:authReducer
})
export default store