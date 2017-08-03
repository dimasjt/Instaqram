import React from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import { ConnectedRouter } from "react-router-redux"
import { ApolloProvider } from "react-apollo"

import { store, history } from "./store"
import { apolloClient } from "./apollo"

import Routes from "./Routes"

import styles from "./styles"

const theme = createMuiTheme(styles)

export default () => {
  return (
    <ApolloProvider store={store} client={apolloClient}>
      <MuiThemeProvider theme={theme}>
        <Routes history={history} ConnectedRouter={ConnectedRouter} />
      </MuiThemeProvider>
    </ApolloProvider>
  )
}
