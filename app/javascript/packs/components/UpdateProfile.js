import React from "react"
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogActions,
} from "material-ui/Dialog"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"
import { Button } from "material-ui"

import EditProfileForm from "./forms/EditProfileForm"

const styleSheet = createStyleSheet("UpdateProfile", (theme) => ({
  paper: {
    width: "60%",
  },
}))

class UpdateProfile extends React.Component {
  render() {
    const { open, close, classes } = this.props
    return (
      <Dialog open={open} classes={{ paper: classes.paper }}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <EditProfileForm />
        </DialogContent>
        <DialogActions>
          <Button color="primary">Save</Button>
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
}

export default withStyles(styleSheet)(UpdateProfile)
