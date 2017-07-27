import React from "react"
import Card, { CardContent } from "material-ui/Card"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import RegisterForm from "../components/forms/RegisterForm"

import { REGISTER } from "../mutations"

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
}

class RegisterPage extends React.Component {
  handleRegister = (values) => {
    this.props.mutate({ variables: { user: values } }).then(({ data }) => {
      console.log("succ", data)
    }).catch((error) => {
      console.log("error", error)
    })
  }
  render() {
    return (
      <div style={styles.container}>
        <Card>
          <CardContent>
            <RegisterForm onSubmit={this.handleRegister} />
          </CardContent>
        </Card>
      </div>
    )
  }
}

RegisterPage.propTypes = {
  mutate: PropTypes.func.isRequired,
}

export default graphql(REGISTER)(RegisterPage)
