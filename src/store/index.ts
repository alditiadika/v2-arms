import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducers'
const middleware = [thunk]
const composed = process.env.NODE_ENV !== 'production' ? 
  composeWithDevTools(applyMiddleware(...middleware)) : 
  compose(applyMiddleware(...middleware))
const store = createStore(
  reducers,
  composed
)
export default store
