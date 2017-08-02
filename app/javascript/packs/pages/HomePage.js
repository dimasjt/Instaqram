import React from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import { GET_FEED } from "../queries"

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
    const { classes, data } = this.props

    if (data.loading) {
      return null
    }

    const list = data.feed.map((photo) => <PhotoCard key={photo.id} photo={photo} />)
    return (
      <div className={classes.container}>
        {list}
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

const WithStyle = withStyles(styleSheet)(HomePage)

export default graphql(GET_FEED)(WithStyle)
