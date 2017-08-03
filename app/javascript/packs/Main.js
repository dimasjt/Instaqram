import React from "react"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import { ConnectedRouter } from "react-router-redux"
import { ApolloProvider } from "react-apollo"
import green from "material-ui/colors/lightGreen"

import { store, history } from "./store"
import { apolloClient } from "./apollo"

import Routes from "./Routes"

const theme = createMuiTheme({
  lighter: green[50],
  light: green[500],
  dark: green[900],
})

export default () => {
  return (
    <ApolloProvider store={store} client={apolloClient}>
      <MuiThemeProvider theme={theme}>
        <Routes history={history} ConnectedRouter={ConnectedRouter} />
      </MuiThemeProvider>
    </ApolloProvider>
  )
}
