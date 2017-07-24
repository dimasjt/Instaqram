import React from "react"
import { TextField, Button } from "material-ui"

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
      <Button margin="normal">Login</Button>
    </form>
  )
}

export default RegisterForm
