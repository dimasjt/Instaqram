import React from "react"
import { Button, TextField } from "material-ui"
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogActions,
} from "material-ui/Dialog"
import Dropzone from "react-dropzone"
import { graphql } from "react-apollo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"

import * as alertActions from "../actions/alert"

import { POST_PHOTO } from "../mutations"

class Upload extends React.Component {
  constructor() {
    super()

    this.state = {
      open: false,
      image: null,
      caption: null,
    }
  }
  hideDialog = () => {
    this.setState({ open: false })
  }
  postPhoto = () => {
    const variables = {
      photo: { caption: this.state.caption },
      files: this.state.image,
    }
    this.props.mutate({ variables }).then(({ data }) => {
      console.log(data)
    }).catch((err) => {
      this.props.actions.showAlert(err.message)
    })
  }
  render() {
    return (
      <div>
        <Button color="contrast" onClick={() => this.setState({ open: true })}>Upload</Button>
        <Dialog open={this.state.open}>
          <DialogTitle>Upload photo</DialogTitle>
          <DialogContent>
            <Dropzone
              onDrop={(files) => this.setState({ image: files })}
              accept="image/jpg,image/png,image/jpeg"
              multiple={false}
              disablePreview
            >
              <p>Upload here</p>
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
}

const Connected = connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(alertActions, dispatch) }),
)(Upload)

export default graphql(POST_PHOTO)(Connected)
