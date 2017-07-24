import React from "react"

import RegisterForm from "../components/forms/RegisterForm"

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
}

export default class RegisterPage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <RegisterForm />
      </div>
    )
  }
}
