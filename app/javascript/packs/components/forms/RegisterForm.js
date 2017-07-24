import React from "react"
import { TextField, Button } from "material-ui"

const RegisterForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        fullWidth
      />
      <TextField
        label="password"
        type="password"
        fullWidth
        margin="normal"
      />

      <Button raised color="primary">Register</Button>
    </form>
  )
}

export default RegisterForm
