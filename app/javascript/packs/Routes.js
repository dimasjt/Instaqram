import React from "react"
import { Route, Switch } from "react-router-dom"
import PropTypes from "prop-types"

import Header from "./components/Header"
import Alert from "./components/Alert"

import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import PhotoPage from "./pages/PhotoPage"

const styles = {
  container: {
    paddingTop: "90px",
  },
}

const Routes = ({ history, ConnectedRouter }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Header />

        <div style={styles.container}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/users/:username" component={ProfilePage} />
            <Route path="/photos/:id" component={PhotoPage} />
          </Switch>
        </div>

        <Alert />
      </div>
    </ConnectedRouter>
  )
}

Routes.propTypes = {
  history: PropTypes.object.isRequired,
  ConnectedRouter: PropTypes.func.isRequired,
}

export default Routes
