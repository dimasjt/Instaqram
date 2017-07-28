import React from "react"
import Card, { CardContent } from "material-ui/Card"
import { graphql } from "react-apollo"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import LoginForm from "../components/forms/LoginForm"

import * as userActions from "../actions/user"
import * as alertActions from "../actions/alert"

import { LOGIN } from "../mutations"

const mergedActions = Object.assign({}, userActions, alertActions)

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
}

class LoginPage extends React.Component {
  handleLogin = (values) => {
    const user = { email: "", password: "", ...values }
    this.props.mutate({ variables: { user } }).then(({ data }) => {
      this.props.actions.setUserByToken(data.login.auth_token)
      this.props.history.push("/")
    }).catch(({ message }) => {
      this.props.actions.showAlert(message)
    })
  }
  render() {
    return (
      <div style={styles.container}>
        <Card>
          <CardContent>
            <LoginForm onSubmit={this.handleLogin} />
          </CardContent>
        </Card>
      </div>
    )
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

const Connected = connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(mergedActions, dispatch) }),
)(LoginPage)

export default graphql(LOGIN)(Connected)
