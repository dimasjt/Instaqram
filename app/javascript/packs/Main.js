import React from "react"
import { MuiThemeProvider } from "material-ui/styles"
import { ConnectedRouter } from "react-router-redux"
import { Provider } from "react-redux"

import Routes from "./Routes"
import { store, history } from "./store"

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Routes history={history} ConnectedRouter={ConnectedRouter} />
        </MuiThemeProvider>
      </Provider>
    )
  }
}
