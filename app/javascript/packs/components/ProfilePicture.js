import React from "react"
import { Avatar, Button, Typography, Paper } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "material-ui/Dialog"
import Dropzone from "react-dropzone"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"
import { graphql } from "react-apollo"

import upload from "../utils/upload"

import * as alertActions from "../actions/alert"
import * as userActions from "../actions/user"

import { UPDATE_PROFILE } from "../mutations"

const mergedActions = Object.assign({}, alertActions, userActions)

const styleSheet = createStyleSheet("ProfilePicture", (theme) => ({
  avatar: {
    width: 200,
    height: 200,
    margin: "0 auto",
    cursor: "pointer",
  },
  uploadWrapper: theme.upload.wrapper,
  placeholder: theme.upload.placeholder,
  placeholderText: theme.upload.placeholderText,
}))

class ProfilePicture extends React.Component {
  constructor() {
    super()

    this.state = {
      open: false,
      image: null,
      base64Image: null,
    }
  }
  openDialog = () => {
    const { currentUser } = this.props
    if (currentUser && currentUser.id.toString() === this.props.user.id) {
      this.setState({ open: true })
    }
  }
  hideDialog = () => {
    this.setState({ open: false })
  }
  uploadImage = async (files) => {
    this.setState({ image: files })

    const reader = new FileReader()
    reader.onload = (event) => {
      this.setState({ base64Image: event.target.result })
    }
    reader.readAsDataURL(files[0])

    try {
      const result = await upload({ file: files[0], type: "User" })
      const json = await result.json()
      this.setState({ imageId: json.id })
    } catch (err) {
      this.props.actions.showAlert(err.message)
    }
  }
  saveImage = () => {
    this.props.updateProfile(this.state.imageId).then(({ data }) => {
      this.props.actions.setUserByToken(data.updateProfile.auth_token)
      this.props.actions.showAlert("Your profile picture updated")
      this.hideDialog()
    }).catch(({ message }) => {
      this.props.actions.showAlert(message)
    })
  }
  renderPlaceholder() {
    let placeholder
    const { classes } = this.props
    if (this.state.base64Image) {
      placeholder = (
        <img
          src={this.state.base64Image}
          alt="Opened file"
          className={classes.image}
        />
      )
    } else {
      placeholder = (
        <Typography
          className={classes.placeholderText}
          type="headline"
          component="p"
        >
          Browse Image
        </Typography>
      )
    }

    return <div className={classes.placeholder}>{placeholder}</div>
  }
  render() {
    const { classes, currentUser } = this.props
    const user = (currentUser && currentUser.id.toString() === this.props.user.id) ? currentUser : this.props.user

    return (
      <div>
        <Avatar
          src={user.image.small}
          alt="Profile"
          className={classes.avatar}
          onClick={this.openDialog}
          component={Paper}
        />

        <Dialog open={this.state.open} onRequestClose={this.hideDialog}>
          <DialogTitle>Update Profile Picture</DialogTitle>
          <DialogContent>
            <Dropzone
              onDrop={this.uploadImage}
              accept="image/jpg,image/png,image/jpeg"
              multiple={false}
              disablePreview
              className={classes.uploadWrapper}
            >
              {this.renderPlaceholder()}
            </Dropzone>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.saveImage} disabled={!this.state.imageId}>Save</Button>
            <Button onClick={this.hideDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

ProfilePicture.defaultProps = {
  currentUser: null,
}

ProfilePicture.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  actions: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
}

const WithStyle = withStyles(styleSheet)(ProfilePicture)

const Connected = connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(mergedActions, dispatch) }),
)(WithStyle)

export default graphql(UPDATE_PROFILE, {
  props: ({ mutate }) => ({
    updateProfile: (imageId) => {
      return mutate({
        variables: { user: { image_id: imageId } },
      })
    },
  }),
})(Connected)
