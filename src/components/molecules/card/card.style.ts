import { CSSProperties } from 'react'

const cardContainerRoot:CSSProperties = {
  boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
  transition:'0.3s'
}
const cardHeaderRoot:CSSProperties = {
  display:'flex',
  fontWeight:'bold',
  fontSize:'1.2em',
  backgroundColor:'rgba(0,0,0,.03)',
  borderBottom:'1px solid rgba(0,0,0,.125)'
}
const cardBodyRoot:CSSProperties = {
  padding:'1.25rem'
}
const cardFooterRoot:CSSProperties = {
  display:'flex',
  padding:'.75rem 1.25rem',
  backgroundColor:'rgba(0,0,0,.03)',
  borderTop:'1px solid rgba(0,0,0,.125)'
}
export default {
  cardContainerRoot,
  cardHeaderRoot,
  cardBodyRoot,
  cardFooterRoot
}