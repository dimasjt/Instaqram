import React from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { Typography } from "material-ui"
import PropTypes from "prop-types"

import { linkFor } from "../utils/helpers"

const styleSheet = createStyleSheet("Comment", () => ({
  username: {
    display: "inline",
    paddingRight: "8px",
  },
  content: {
    display: "inline",
  },
}))

const Comment = ({ classes }) => {
  return (
    <div>
      {linkFor(
        <Typography
          component="h4"
          type="subheading"
          className={classes.username}
        >
          zuck
        </Typography>,
        "/users/zuck",
      )}
      <Typography component="p" className={classes.content}>
        Looks great!
      </Typography>
    </div>
  )
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(Comment)
