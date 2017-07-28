import React from "react"
import { Field, reduxForm, propTypes } from "redux-form"
import { TextField } from "@gfpacheco/redux-form-material-ui"

const EditProfileForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} name="editProfileForm">
      <Field
        name="name"
        label="Name"
        component={TextField}
        fullWidth
        margin="normal"
      />
      <Field
        name="email"
        label="Email"
        component={TextField}
        fullWidth
        margin="normal"
      />
      <Field
        name="username"
        label="Username"
        component={TextField}
        fullWidth
        margin="normal"
      />
      <Field
        name="website"
        label="Website"
        component={TextField}
        fullWidth
        margin="normal"
      />
      <Field
        name="caption"
        label="Caption"
        component={TextField}
        fullWidth
        margin="normal"
        multiline
      />
      <Field
        name="password"
        label="Password"
        component={TextField}
        fullWidth
        margin="normal"
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
