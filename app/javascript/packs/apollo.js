import { ApolloClient } from "react-apollo"

export const apolloClient = new ApolloClient()
export const apolloReducer = apolloClient.reducer()
export const apolloMiddleware = apolloClient.middleware()
