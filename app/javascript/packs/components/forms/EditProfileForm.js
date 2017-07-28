import React from "react"
import { Field, reduxForm, propTypes } from "redux-form"
import { TextField } from "@gfpacheco/redux-form-material-ui"
import { connect } from "react-redux"
import { Button } from "material-ui"

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
        name="birthdate"
        label="Birthdate"
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
        type="password"
      />

      <Button color="primary" type="submit">Save</Button>
    </form>
  )
}

EditProfileForm.propTypes = {
  ...propTypes,
}

const ReduxForm = reduxForm({
  form: "editProfile",
})(EditProfileForm)

export default connect(
  (state) => {
    const initialValues = Object.assign({}, state.currentUser)
    delete initialValues.id
    delete initialValues.image
    return {
      initialValues,
    }
  },
)(ReduxForm)
