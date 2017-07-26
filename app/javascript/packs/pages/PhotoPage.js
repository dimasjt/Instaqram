import React from "react"
import { Grid, Paper, Avatar, Typography } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"

import Comment from "../components/Comment"
import Love from "../components/Love"
import PostCommentForm from "../components/forms/PostCommentForm"

import { linkFor } from "../utils/helpers"

const styleSheet = createStyleSheet("PhotoPage", () => ({
  container: {
    width: "80%",
    margin: "0 auto",
  },
  paper: {
    height: "80vh",
  },
  wrapper: {
    height: "100%",
  },
  photoWrapper: {
    lineHeight: "80vh",
  },
  image: {
    width: "100%",
    verticalAlign: "middle",
  },
  profile: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px",
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
}))

class PhotoPage extends React.Component {
  constructor() {
    super()

    this.state = { liked: false }
  }
  render() {
    const { classes } = this.props

    const comments = [1, 2, 3, 4, 5, 6].map((id) => {
      return <Comment key={id} />
    })

    return (
      <div className={classes.container}>
        <Paper elevation={2} className={classes.paper}>
          <Grid container gutter={0} align="stretch" justify="center" className={classes.wrapper}>
            <Grid item xs={8} className={classes.photoWrapper}>
              <img
                src="https://material-ui-1dab0.firebaseapp.com/build/abd50bc0e11052fea9669f18f0c017bc.jpg"
                alt="post"
                className={classes.image}
              />
            </Grid>
            <Grid item xs={4} className={classes.content}>
              <div className={classes.profile}>
                {linkFor(
                  <Avatar
                    src="https://material-ui-1dab0.firebaseapp.com/build/b16427bb030d63fd8e52ea84defda1d1.jpg"
                    alt="Profile"
                  />,
                  "/users/dimasjt",
                )}
                {linkFor(
                  <Typography component="h3" className={classes.username} type="headline">
                    dimasjt
                  </Typography>,
                  "/users/dimasjt",
                )}
              </div>
              <div className={classes.details}>
                <Typography component="p" className={classes.caption}>
                  Apple Inc. is an American multinational technology company headquartered in Cupertino, California that designs, develops, and sells consumer electronics, computer software, and online services
                </Typography>
                <div>
                  {comments}
                </div>
              </div>
              <div>
                <Love
                  liked={this.state.liked}
                  onClick={() => this.setState({ liked: !this.state.liked })}
                />
              </div>
              <div className={classes.postComment}>
                <PostCommentForm />
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
}

export default withStyles(styleSheet)(PhotoPage)
