import React from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"

import PhotoCard from "../components/PhotoCard"

const styleSheet = createStyleSheet("HomePage", (theme) => ({
  root: theme.mixins.gutters({
    padding: "20px",
  }),
  container: {
    width: "40%",
    margin: "0 auto",
  },
}))

class HomePage extends React.Component {
  render() {
    const { classes } = this.props

    const list = [1, 2, 3, 4, 5, 6].map((id) => <PhotoCard key={id} />)
    return (
      <div className={classes.container}>
        {list}
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(HomePage)
