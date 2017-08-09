import React from "react"
import { Button } from "material-ui"
import { Link } from "react-router-dom"
import { Field, reduxForm, propTypes } from "redux-form"
import { TextField } from "@gfpacheco/redux-form-material-ui"

import {
  required,
  email,
  username,
  min,
} from "./validations"

const RegisterForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        component={TextField}
        fullWidth
        label="Username"
        margin="normal"
        type="text"
        validate={[required, min(3), username]}
      />
      <Field
        name="name"
        component={TextField}
        label="Name"
        fullWidth
        margin="normal"
        validate={[required, min(5)]}
      />
      <Field
        name="email"
        component={TextField}
        label="Email"
        fullWidth
        margin="normal"
        validate={[required, email]}
      />
      <Field
        name="password"
        component={TextField}
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        validate={[required, min(8)]}
      />

      <Button raised color="primary" type="submit">Register</Button>
      <Button component={Link} to="/login">Login</Button>
    </form>
  )
}

RegisterForm.propTypes = {
  ...propTypes,
}

export default reduxForm({
  form: "register",
})(RegisterForm)
