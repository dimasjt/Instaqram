import React from "react"
import { reduxForm, propTypes } from "redux-form"
import { TextField } from "material-ui"
import PropTypes from "prop-types"

const EditProfileForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} name="editProfileForm">
      <TextField
        label="Name"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Username"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Caption"
        fullWidth
        margin="normal"
        multiline
      />
    </form>
  )
}

EditProfileForm.propTypes = {
  ...propTypes,
}

export default reduxForm({
  form: "editProfile",
})(EditProfileForm)
