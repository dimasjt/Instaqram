import React from "react"
import { Route, Switch } from "react-router-dom"
import PropTypes from "prop-types"

import HomePage from "./pages/HomePage"

const Routes = ({ history, ConnectedRouter }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  )
}

Routes.propTypes = {
  history: PropTypes.object.isRequired,
  ConnectedRouter: PropTypes.func.isRequired,
}

export default Routes
