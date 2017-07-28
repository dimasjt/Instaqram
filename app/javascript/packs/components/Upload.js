import React from "react"
import { Button } from "material-ui"
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogActions,
} from "material-ui/Dialog"
import Dropzone from "react-dropzone"

class Upload extends React.Component {
  constructor() {
    super()

    this.state = { open: false }
  }
  onDrop = (files) => {
    console.log(files)
  }
  hideDialog = () => {
    this.setState({ open: false })
  }
  render() {
    return (
      <div>
        <Button color="contrast" onClick={() => this.setState({ open: true })}>Upload</Button>
        <Dialog open={this.state.open}>
          <DialogTitle>Upload photo</DialogTitle>
          <DialogContent>
            <Dropzone onDrop={this.onDrop}>
              <p>Upload here</p>
            </Dropzone>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hideDialog} color="primary">Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default Upload
