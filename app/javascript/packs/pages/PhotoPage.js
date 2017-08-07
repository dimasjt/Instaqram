import React from "react"
import { Grid, Paper, Avatar, Typography } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { graphql } from "react-apollo"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Comment from "../components/Comment"
import Love from "../components/Love"
import PostCommentForm from "../components/forms/PostCommentForm"
import PhotoOpts from "../components/PhotoOpts"

import { linkFor } from "../utils/helpers"

import { GET_PHOTO } from "../queries"

const styleSheet = createStyleSheet("PhotoPage", () => ({
  container: {
    width: "80%",
    margin: "0 auto",
  },
  paper: {
    height: "480px",
  },
  wrapper: {
    height: "100%",
  },
  photoWrapper: {
    lineHeight: "480px",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    verticalAlign: "middle",
  },
  profile: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px 0 10px 10px",
    borderBottom: "1px solid #ccc",
    alignItems: "center",
    marginRight: "16px",
  },
  username: {
    marginLeft: "20px",
  },
  content: {
    padding: "8px 0 8px 16px",
  },
  details: {
    margin: "10px 0",
    padding: "10px 0",
    overflow: "auto",
    height: "60%",
  },
  caption: {
    paddingBottom: "16px",
  },
  postComment: {
    paddingRight: "16px",
  },
  headOther: {
    flex: 1,
  },
  headMid: {
    flex: 10,
  },
}))

class PhotoPage extends React.Component {
  render() {
    const { classes, data, history } = this.props
    const photo = data.photo || {}
    const user = photo.user || {}

    if (data.loading) {
      return null
    }

    const comments = photo.comments.map((comment) => {
      return <Comment key={comment.id} comment={comment} />
    })

    return (
      <div className={classes.container}>
        <Paper elevation={2} className={classes.paper}>
          <Grid container gutter={0} align="stretch" justify="center" className={classes.wrapper}>
            <Grid item xs={8} className={classes.photoWrapper}>
              <img
                src={photo.image.original}
                alt="post"
                className={classes.image}
              />
            </Grid>
            <Grid item xs={4} className={classes.content}>
              <div className={classes.profile}>
                {linkFor(
                  <Avatar
                    src={user.image.thumb}
                    alt={user.username}
                  />,
                  `/users/${user.username}`,
                  { className: classes.headOther },
                )}
                {linkFor(
                  <Typography component="h3" className={classes.username} type="headline">
                    {user.username}
                  </Typography>,
                  `/users/${user.username}`,
                  { className: classes.headMid },
                )}
                <PhotoOpts
                  classes={classes.headOther}
                  photo={photo}
                  history={history}
                />
              </div>
              <div className={classes.details}>
                <Typography component="p" className={classes.caption}>
                  {photo.caption}
                </Typography>
                <div>
                  {comments}
                </div>
              </div>
              <div>
                <Love photo={photo} history={history} />
              </div>
              <div className={classes.postComment}>
                <PostCommentForm photo={photo} />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

PhotoPage.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    photo: PropTypes.shape({
      user: PropTypes.object,
    }),
  }).isRequired,
  history: PropTypes.object.isRequired,
}

const WithStyle = withStyles(styleSheet)(PhotoPage)
const Connected = connect(
  (state) => state,
)(WithStyle)

export default graphql(GET_PHOTO, {
  options: ({ match }) => ({ variables: { id: match.params.id } }),
})(Connected)
