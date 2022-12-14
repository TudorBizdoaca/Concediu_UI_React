import { ApolloClient, ApolloLink, split, InMemoryCache } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import { setContext } from '@apollo/client/link/context'
import { env } from '../utils/env'
import { createUploadLink } from 'apollo-upload-client'
import omitDeep from 'omit-deep-lodash'
import { getUserManager } from '@axa-fr/react-oidc-core'
import { emptyObject } from 'utils/constants'

// Create a WebSocket link:
let wsLink
const getWsLink = () => {
  let activeSocket, currentAccessToken
  if (!wsLink) {
    const wsClient = createClient({
      url: `${env.REACT_APP_GQL_WS_PROTOCOL}://${env.REACT_APP_GQL}/graphql`,
      keepAlive: 10000, // ping server every 10 seconds,
      connectionParams: async () => {
        const userManager = getUserManager()
        const { access_token } = (await userManager.getUser()) ?? emptyObject
        currentAccessToken = access_token

        return {
          authorization: access_token ? `Bearer ${access_token}` : ''
        }
      },
      on: {
        connected: socket => (activeSocket = socket),
        ping: async received => {
          if (!received) {
            const userManager = getUserManager()
            const { access_token } = (await userManager.getUser()) ?? emptyObject
            if (activeSocket.readyState === WebSocket.OPEN && currentAccessToken !== access_token) {
              setTimeout(() => {
                activeSocket.close(1000, 'Access token silent renew')
              }, 1000) // wait 1 second for the pong and then close the connection
            }
          }
        },
        closed: event => {
          console.log(`GraphQL WebSocket closed!: ${event.code} Reason: ${event.reason}`)
        }
      }
    })
    wsLink = new GraphQLWsLink(wsClient)
    wsLink.setOnError(
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
          )
        if (networkError) console.log(`[Network error]: ${networkError}`)
      })
    )
  }
  return wsLink
}

const httpLink = createUploadLink({
  uri: `${env.REACT_APP_GQL_HTTP_PROTOCOL}://${env.REACT_APP_GQL}/graphql`,
  onError: onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      )
    if (networkError) console.log(`[Network error]: ${networkError}`)
  })
})

const authLink = setContext(async (_, { headers }) => {
  const userManager = getUserManager()
  const { access_token } = (await userManager.getUser()) ?? emptyObject

  return {
    headers: {
      ...headers,
      authorization: access_token ? `Bearer ${access_token}` : ''
    }
  }
})

const omitTypenameLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, ['__typename'])
  }
  return forward(operation)
})

const link = () =>
  split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    getWsLink(),
    httpLink
  )

const retryLink = new RetryLink({
  delay: {
    initial: 200,
    max: 2000,
    jitter: true
  },
  attempts: {
    max: 3
  }
})

const myAppLink = () => ApolloLink.from([omitTypenameLink, retryLink, authLink.concat(link())])

const cache = new InMemoryCache({
  typePolicies: {
    Page: {
      keyFields: ['afterId', 'sortBy', 'direction', 'pageSize']
    },
    ExternalTenant: { keyFields: ['externalId'] }
  }
})

let apolloClient
export const getApolloClient = () => {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      link: myAppLink(),
      cache
    })
  }
  return apolloClient
}
