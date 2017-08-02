import React from "react"
import { Favorite, FavoriteBorder } from "material-ui-icons"
import { IconButton, Typography } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { graphql } from "react-apollo"
import pl from "pluralize"
import PropTypes from "prop-types"

import { GET_PHOTO } from "../queries"
import { LIKE_PHOTO } from "../mutations"

const styleSheet = createStyleSheet("LoveButton", () => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}))

class Love extends React.Component {
  onClick = () => {
    this.props.likePhoto(this.props.photo.id)
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
}

const WithStyle = withStyles(styleSheet)(Love)

export default graphql(LIKE_PHOTO, {
  props: ({ ownProps, mutate }) => ({
    likePhoto: (photoId) => {
      mutate({
        variables: { photo_id: photoId },
        update(store, { data: { likePhoto } }) {
          const query = { query: GET_PHOTO, variables: { id: ownProps.photo.id } }
          const prevData = store.readQuery(query)
          const newData = Object.assign({}, prevData, {
            photo: {
              ...prevData.photo,
              likes_count: likePhoto.likes_count,
              liked: likePhoto.liked,
            },
          })
          store.writeQuery({ ...query, data: newData })
        },
      })
    },
  }),
})(WithStyle)
