import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import serviceWorker from './sw'
import store from 'store'
import App from 'pages/app'
import { ApolloProvider } from '@apollo/client'
import apolloClient from 'services/graphql.config'

const Root:React.FC = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <HashRouter>
          <App/>
        </HashRouter>
      </ApolloProvider>
    </Provider>
  )
}
const root = document.getElementById('root')
const Element = React.createElement(Root, {}, null)
render(Element, root)
serviceWorker()