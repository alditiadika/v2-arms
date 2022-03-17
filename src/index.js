import React from 'react'
import { render } from 'react-dom'
import serviceWorker from './sw'

const root = document.getElementById('root')

const renderApp = () => {
  //eslint-disable-next-line
  const MainApp = require('./app').default
  render(
    <MainApp />,
    root
  )
}

if (module.hot) {
  module.hot.accept('./index', () => {
    //eslint-disable-next-line
    const NextApp = require('./app').default
    render(
      <NextApp />,
      root
    )
  })
}
renderApp()
serviceWorker()