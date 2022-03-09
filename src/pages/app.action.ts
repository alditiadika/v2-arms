import IAppTypes from './app.types'

const appActionSelectMenu:IAppTypes.IAppActionSelectMenu = payload => dispatch => {
  console.log(payload, dispatch)
}
export default {
  appActionSelectMenu
}