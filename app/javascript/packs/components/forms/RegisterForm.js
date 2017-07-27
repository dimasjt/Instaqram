import React from "react"
import { Button } from "material-ui"
import { Link } from "react-router-dom"
import { Field, reduxForm, propTypes } from "redux-form"
import { TextField } from "@gfpacheco/redux-form-material-ui"

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
      />
      <Field
        name="name"
        component={TextField}
        label="Name"
        fullWidth
        margin="normal"
      />
      <Field
        name="email"
        component={TextField}
        label="Email"
        fullWidth
        margin="normal"
      />
      <Field
        name="password"
        component={TextField}
        label="Password"
        type="password"
        fullWidth
        margin="normal"
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
