import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
    currentUser ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: "/login",
        state: { from: props.location },
      }}
      />
    )
  )}
  />
)

PrivateRoute.defaultProps = {
  currentUser: null,
}

PrivateRoute.propTypes = {
  currentUser: PropTypes.object,
  component: PropTypes.any.isRequired,
}

export default connect(
  (state) => state,
)(PrivateRoute)
