import React from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"

const styleSheet = createStyleSheet("ProfilePage", (theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
  },
}))

class ProfilePage extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        ProfilePage
      </div>
    )
  }
}

export default withStyles(styleSheet)(ProfilePage)
