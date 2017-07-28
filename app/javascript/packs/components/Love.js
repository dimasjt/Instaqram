import React from "react"
import { Favorite, FavoriteBorder } from "material-ui-icons"
import { IconButton, Typography } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"

const styleSheet = createStyleSheet("LoveButton", () => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}))

const Love = ({ onClick, liked, likes, classes }) => {
  return (
    <div className={classes.container}>
      <IconButton onClick={onClick}>
        { liked ? <Favorite /> : <FavoriteBorder /> }
      </IconButton>
      <Typography type="subheading">{ likes } likes</Typography>
    </div>
  )
}

Love.defaultProps = {
  liked: false,
  likes: 0,
}

Love.propTypes = {
  liked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(Love)
