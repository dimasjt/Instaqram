import React from "react"
import { TextField, Button } from "material-ui"
import { Link } from "react-router-dom"

const RegisterForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
      />
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
        label="Password"
        type="password"
        fullWidth
        margin="normal"
      />

      <Button raised color="primary">Register</Button>
      <Button component={Link} to="/login">Login</Button>
    </form>
  )
}

export default RegisterForm
