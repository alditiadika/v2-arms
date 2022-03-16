import { CSSProperties } from 'react'
import { navbarStyle } from 'utils/constants'

const container:CSSProperties = {
  padding:'20px',
  backgroundColor:'#F1F1F1',
  minHeight:`calc(100vh - ${navbarStyle.height})`
}
const modalError:CSSProperties = {
  width:'200px'
}
export default {
  container,
  modalError
}