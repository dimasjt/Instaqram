import React from "react"
import { TextField } from "redux-form-material-ui"
import { reduxForm, Field } from "redux-form"

const RegisterForm = ({ handleSubmit }) => {
  return (
    <form>
      <Field
        name="email"
        component={TextField}
        hintText="Email"
        fullWidth
        type="text"
        floatingLabelText="Email"
      />
    </form>
  )
}

export default reduxForm({
  form: "register",
})(RegisterForm)
