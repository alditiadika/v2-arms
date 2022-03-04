import {
  ApolloClient, InMemoryCache,
  ApolloLink,
  HttpLink
} from '@apollo/client'
import { Buffer } from 'buffer'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'

type TReqLink = (q:ApolloLink, s:ApolloLink) => ApolloLink
type TMainDef = { kind:'OperationDefinition', operation:'query' | 'mutation' | 'subscription' }

const username = process.env.PRISMA_USERNAME as string
const password = process.env.PRISMA_PASSWORD as string
const endpoint = process.env.PRISMA_ENDPOINT as string
const subscriptionEndpoint = process.env.PRISMA_SUBSCRIPTION_ENDPOINT as string

const httpLink = new HttpLink({
  uri:endpoint,
  credentials:'include',
  headers:{ 
    authorization:`Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
  }
})
const wsLink = new WebSocketLink(new SubscriptionClient(subscriptionEndpoint, {
  reconnect:true,
  lazy:true
}))

const requestLink:TReqLink = (queryOrMutationLink, subscriptionLink) => {
  return ApolloLink.split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query) as TMainDef
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    subscriptionLink,
    queryOrMutationLink
  )
}

const router = ApolloLink.from([
  requestLink(httpLink, wsLink)
])
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:router
})
export default client
