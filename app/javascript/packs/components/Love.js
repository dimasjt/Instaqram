import React from "react"
import { Favorite, FavoriteBorder } from "material-ui-icons"
import { IconButton, Typography } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { graphql, compose } from "react-apollo"
import pl from "pluralize"
import PropTypes from "prop-types"

import { LIKE_PHOTO, UNLIKE_PHOTO } from "../mutations"

const styleSheet = createStyleSheet("LoveButton", () => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}))

class Love extends React.Component {
  onClick = () => {
    if (this.props.photo.liked) {
      this.props.unlikePhoto({ variables: { photo_id: this.props.photo.id } })
    } else {
      this.props.likePhoto({ variables: { photo_id: this.props.photo.id } })
    }
  }
  render() {
    const { classes, photo } = this.props
    return (
      <div className={classes.container}>
        <IconButton onClick={this.onClick}>
          { photo.liked ? <Favorite /> : <FavoriteBorder /> }
        </IconButton>
        <Typography type="subheading">{ photo.likes_count } {pl("like", photo.likes_count)}</Typography>
      </div>
    )
  }
}

Love.propTypes = {
  photo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  likePhoto: PropTypes.func.isRequired,
  unlikePhoto: PropTypes.func.isRequired,
}

const WithStyle = withStyles(styleSheet)(Love)

export default compose(
  graphql(LIKE_PHOTO, { name: "likePhoto" }),
  graphql(UNLIKE_PHOTO, { name: "unlikePhoto" }),
)(WithStyle)
