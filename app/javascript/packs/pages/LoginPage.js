import React from "react"
import Card, { CardContent } from "material-ui/Card"

import LoginForm from "../components/forms/LoginForm"

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
}
export default class LoginPage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Card>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    )
  }
}
