import React from "react"
import { Favorite, FavoriteBorder } from "material-ui-icons"
import { IconButton } from "material-ui"
import PropTypes from "prop-types"

const Love = ({ onClick, liked }) => {
  return (
    <IconButton onClick={onClick}>
      { liked ? <Favorite /> : <FavoriteBorder /> }
    </IconButton>
  )
}

Love.defaultProps = {
  liked: false,
}

Love.propTypes = {
  liked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default Love
