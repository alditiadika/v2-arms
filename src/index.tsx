import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { HashRouter } from 'react-router-dom'

import store from 'store'
import App from 'pages/app.component'
import apolloClient from 'services/graphql.config'
import serviceWorker from './sw'

//import all general styles
import 'assets/css/root.css'
import '@progress/kendo-theme-material/dist/all.css'
import 'assets/css/kendo.css'

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