import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

type TProps = {
  to:string,
  from:string
}

const RedirectDefaultPath:React.FC<TProps> = ({ from, to }) => {
  const { pathname } = useLocation()
  if(pathname === from) return <Navigate to={to} replace={true} />
  return null
}
export default RedirectDefaultPath