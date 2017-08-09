import React from "react"
import Card, { CardContent, CardMedia, CardHeader, CardActions } from "material-ui/Card"
import { Typography, Avatar } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import TimeAgo from "react-timeago"

import Comment from "./Comment"
import PostCommentForm from "./forms/PostCommentForm"
import Love from "./Love"

import { isShow } from "../utils/helpers"

const styleSheet = createStyleSheet("PhotoCard", () => ({
  root: {
    marginBottom: "15px",
  },
  block: {
    display: "block",
    width: "100%",
  },
  content: {
    paddingTop: 0,
    paddingBottom: "16px",
  },
  comments: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  commentPost: {
    paddingTop: "10px",
    borderTop: "1px solid #cccccc",
  },
  mediaWrapper: {
    borderTop: "1px solid #efefef",
    borderBottom: "1px solid #efefef",
  },
}))

class PhotoCard extends React.Component {
  constructor() {
    super()

    this.state = { liked: false }
  }
  render() {
    const { classes, raised, onlyMedia, photo } = this.props
    const { user } = photo

    const avatar = <Avatar src={user.image.thumb} alt={user.username} />
    const username = <Link to={`/users/${user.username}`}>{user.username}</Link>
    const createdAt = <TimeAgo date={photo.created_at.unix} />
    const comments = photo.comments.map((comment) => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
        />
      )
    })

    return (
      <Card className={classes.root} raised={raised}>
        {isShow(
          <CardHeader
            avatar={avatar}
            title={username}
            subheader={createdAt}
          />,
          !onlyMedia,
        )}
        <CardMedia className={classes.mediaWrapper}>
          <img
            src={photo.image.medium}
            alt={photo.caption}
            className={classes.block}
          />
        </CardMedia>

        {isShow(
          <div>
            <CardActions>
              <Love photo={photo} />
            </CardActions>
            <CardContent className={classes.content}>
              <Typography component="p">
                {photo.caption}
              </Typography>
              <div className={classes.comments}>
                {comments}
              </div>
              <div className={classes.commentPost}>
                <PostCommentForm photo={photo} />
              </div>
            </CardContent>
          </div>,
          !onlyMedia,
        )}
      </Card>
    )
  }
}

PhotoCard.defaultProps = {
  onlyMedia: false,
  raised: false,
  photo: {
    image: {
      original: "http://danielkitchensandbathrooms.co.uk/wp-content/uploads/2014/04/placeholder-840x630.png",
      medium: "http://danielkitchensandbathrooms.co.uk/wp-content/uploads/2014/04/placeholder-840x630.png",
      thumb: "http://danielkitchensandbathrooms.co.uk/wp-content/uploads/2014/04/placeholder-840x630.png",
    },
  },
}

PhotoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  onlyMedia: PropTypes.bool,
  raised: PropTypes.bool,
  photo: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(PhotoCard)
