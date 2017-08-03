import React from "react"
import { Button, TextField, Typography, IconButton } from "material-ui"
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogActions,
} from "material-ui/Dialog"
import Dropzone from "react-dropzone"
import { graphql } from "react-apollo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { withStyles, createStyleSheet } from "material-ui/styles"
import UploadIcon from "material-ui-icons/FileUpload"
import PropTypes from "prop-types"

import upload from "../utils/upload"

import * as alertActions from "../actions/alert"

import { POST_PHOTO } from "../mutations"

const styleSheet = createStyleSheet("Upload", () => ({
  uploadWrapper: {
    height: "300px",
    width: "360px",
    border: "none",
    marginBottom: "30px",
  },
  placeholder: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
    textAlign: "center",
  },
  placeholderText: {
    lineHeight: "300px",
    textAlign: "center",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
}))

const initialState = {
  open: false,
  image: null,
  caption: null,
  base64Image: null,
  image_id: null,
}

class Upload extends React.Component {
  constructor() {
    super()

    this.state = Object.assign({}, initialState)
  }
  cleanState() {
    this.setState({
      ...initialState,
      open: this.state.open,
    })
  }
  hideDialog = () => {
    this.setState({ open: false })
  }
  postPhoto = () => {
    const variables = {
      photo: { caption: this.state.caption },
      image_id: this.state.image_id,
    }
    this.props.mutate({ variables }).then(({ data }) => {
      // TODO add action view photo to alert
      this.props.actions.showAlert("Your photo uploaded.", {
        name: "View",
        to: `/photos/${data.postPhoto.id}`,
      })
      this.hideDialog()
      this.cleanState()
    }).catch((err) => {
      this.props.actions.showAlert(err.message)
    })
  }
  openImageFile = async (files) => {
    this.setState({ image: files })

    const reader = new FileReader()
    reader.onload = (event) => {
      this.setState({ base64Image: event.target.result })
    }
    reader.readAsDataURL(files[0])

    try {
      const result = await upload({ file: files[0], type: "Photo" })
      const json = await result.json()
      this.setState({ image_id: json.id })
    } catch (err) {
      this.props.actions.showAlert(err.message)
    }
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
    const { classes } = this.props

    return (
      <div>
        <IconButton color="contrast" onClick={() => this.setState({ open: true })}>
          <UploadIcon />
        </IconButton>
        <Dialog open={this.state.open}>
          <DialogTitle>Upload photo</DialogTitle>
          <DialogContent>
            <Dropzone
              onDrop={this.openImageFile}
              accept="image/jpg,image/png,image/jpeg"
              multiple={false}
              disablePreview
              className={classes.uploadWrapper}
            >
              {this.renderPlaceholder()}
            </Dropzone>
            <TextField
              fullWidth
              placeholder="Caption"
              multiline
              onChange={(event) => this.setState({ caption: event.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.postPhoto}>Post</Button>
            <Button onClick={this.hideDialog} color="primary">Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

Upload.propTypes = {
  mutate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

const WithStyle = withStyles(styleSheet)(Upload)

const Connected = connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(alertActions, dispatch) }),
)(WithStyle)

export default graphql(POST_PHOTO)(Connected)
