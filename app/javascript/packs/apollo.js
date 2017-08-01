import { ApolloClient, createNetworkInterface } from "react-apollo"

const networkInterface = createNetworkInterface({
  uri: "/api/graphql",
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    const token = window.localStorage.getItem("auth_token")
    req.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  },
}])

export const apolloClient = new ApolloClient({ networkInterface })
export const apolloReducer = apolloClient.reducer()
export const apolloMiddleware = apolloClient.middleware()
