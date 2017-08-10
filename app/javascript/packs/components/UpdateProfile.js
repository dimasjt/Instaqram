import React from "react"
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogActions,
} from "material-ui/Dialog"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"
import { Button } from "material-ui"
import { graphql } from "react-apollo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import EditProfileForm from "./forms/EditProfileForm"

import * as userActions from "../actions/user"
import * as alertActions from "../actions/alert"

import { UPDATE_PROFILE } from "../mutations"

const mergedActions = Object.assign({}, userActions, alertActions)

const styleSheet = createStyleSheet("UpdateProfile", () => ({
  paper: {
    width: "60%",
  },
}))

class UpdateProfile extends React.Component {
  handleUpdateProfile = (user) => {
    this.props.mutate({ variables: { user } }).then(({ data }) => {
      this.props.actions.showAlert("User updated")
      this.props.actions.setUserByToken(data.updateProfile.auth_token)
    }).catch((err) => {
      this.props.actions.showAlert(err.message)
    })
  }
  render() {
    const { open, close, classes } = this.props
    return (
      <Dialog open={open} classes={{ paper: classes.paper }}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <EditProfileForm onSubmit={this.handleUpdateProfile} />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

UpdateProfile.defaultProps = {
  open: false,
}

UpdateProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  close: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
}

const WithStyle = withStyles(styleSheet)(UpdateProfile)

const Connected = connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(mergedActions, dispatch) }),
)(WithStyle)

export default graphql(UPDATE_PROFILE)(Connected)
