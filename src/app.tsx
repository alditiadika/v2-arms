import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { HashRouter } from 'react-router-dom'

import store from 'store'
import App from 'pages/app.component'
import apolloClient from 'services/graphql.config'

//import all general styles
import '@progress/kendo-theme-default/dist/all.css'
import 'assets/css/kendo.css'
import 'assets/css/root.css'

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
export default Root