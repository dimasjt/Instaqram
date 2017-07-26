import React from "react"
import { MuiThemeProvider } from "material-ui/styles"
import { ConnectedRouter } from "react-router-redux"
import { ApolloProvider } from "react-apollo"

import { store, history } from "./store"
import { apolloClient } from "./apollo"

import Routes from "./Routes"

export default () => {
  return (
    <ApolloProvider store={store} client={apolloClient}>
      <MuiThemeProvider>
        <Routes history={history} ConnectedRouter={ConnectedRouter} />
      </MuiThemeProvider>
    </ApolloProvider>
  )
}
