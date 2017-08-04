import React from "react"
import { Favorite, FavoriteBorder } from "material-ui-icons"
import { IconButton, Typography } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { graphql } from "react-apollo"
import pl from "pluralize"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { LIKE_PHOTO } from "../mutations"

const styleSheet = createStyleSheet("LoveButton", () => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}))

const Love = ({ classes, photo, currentUser, likePhoto, history }) => (
  <div className={classes.container}>
    <IconButton
      onClick={() => {
        if (currentUser) {
          likePhoto(photo.id)
        } else {
          history.push("/login")
        }
      }}
    >
      { photo.liked ? <Favorite /> : <FavoriteBorder /> }
    </IconButton>
    <Typography type="subheading">{ photo.likes_count } {pl("like", photo.likes_count)}</Typography>
  </div>
)

Love.defaultProps = {
  history: null,
  currentUser: null,
}

Love.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    likes_count: PropTypes.number.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
  likePhoto: PropTypes.func.isRequired,
  history: PropTypes.object,
  currentUser: PropTypes.object,
}

const WithStyle = withStyles(styleSheet)(Love)
const Connected = connect(
  (state) => state,
)(WithStyle)

export default graphql(LIKE_PHOTO, {
  props: ({ ownProps, mutate }) => ({
    likePhoto: (photoId) => {
      mutate({
        variables: { photo_id: photoId },
        updateQueries: {
          feed: (prev, { mutationResult: { data: { likePhoto } } }) => {
            return Object.assign({}, prev, {
              feed: prev.feed.map((p) => {
                if (p.id === ownProps.photo.id) {
                  return {
                    ...p,
                    likes_count: likePhoto.likes_count,
                    liked: likePhoto.liked,
                  }
                }
                return p
              }),
            })
          },
        },
      })
    },
  }),
})(Connected)
