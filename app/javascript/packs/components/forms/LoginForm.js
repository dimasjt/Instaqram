import React from "react"
import { Button } from "material-ui"
import { Link } from "react-router-dom"
import { TextField } from "@gfpacheco/redux-form-material-ui"
import { Field, reduxForm, propTypes } from "redux-form"

const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        component={TextField}
        fullWidth
        label="Email"
        margin="normal"
      />

      <Field
        name="password"
        component={TextField}
        fullWidth
        label="Password"
        margin="normal"
        type="password"
      />

      <Button raised color="primary" type="submit">Login</Button>
      <Button component={Link} to="/register">Register</Button>
    </form>
  )
}

LoginForm.propTypes = {
  ...propTypes,
}

export default reduxForm({
  form: "login",
})(LoginForm)
