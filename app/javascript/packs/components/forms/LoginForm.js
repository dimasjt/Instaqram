import React from "react"
import { TextField, Button } from "material-ui"
import { Link } from "react-router-dom"

const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
      />

      <Button raised color="primary">Login</Button>
      <Button component={Link} to="/register">Register</Button>
    </form>
  )
}

export default LoginForm
