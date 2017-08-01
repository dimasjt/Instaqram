import React from "react"
import { Snackbar, IconButton, Button } from "material-ui"
import CloseIcon from "material-ui-icons/Close"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import * as alertActions from "../actions/alert"

const Alert = ({ actions, alert }) => {
  const message = <span>{alert.message}</span>

  const action = (alert.action ? (
    <Button
      component={Link}
      color="accent"
      to={alert.action.to}
      key="link"
    >
      {alert.action.name}
    </Button>
  ) : null)

  return (
    <Snackbar
      open={alert.open}
      message={message}
      autoHideDuration={5000}
      onRequestClose={() => actions.hideAlert()}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      action={[
        action,
        <IconButton
          key="close"
          onClick={() => actions.hideAlert()}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}

Alert.propTypes = {
  actions: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired,
}

export default connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(alertActions, dispatch) }),
)(Alert)
