import { combineReducers } from 'redux'
import authReducer from 'pages/auth/auth.reducer'

const appReducer = () => ({
  name:process.env.APP_NAME as string,
  version: process.env.APP_VERSION as string,
})
const store = combineReducers({
  app:appReducer,
  auth:authReducer
})
export default store