import React from "react"
import Card, { CardContent, CardMedia, CardHeader, CardActions } from "material-ui/Card"
import { Typography, Avatar } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

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
}))

class PhotoCard extends React.Component {
  constructor() {
    super()

    this.state = { liked: false }
  }
  render() {
    const { classes, raised, onlyMedia } = this.props

    const avatar = <Avatar src="https://material-ui-1dab0.firebaseapp.com/build/b16427bb030d63fd8e52ea84defda1d1.jpg" alt="Profile" />
    const username = <Link to={"/users/dimasjt"}>dimasjt</Link>
    const comments = [1, 2, 3, 4, 5, 6, 7].map((id) => <Comment key={id} />)

    return (
      <Card className={classes.root} raised={raised}>
        {isShow(
          <CardHeader
            avatar={avatar}
            title={username}
            subheader="30 Feb 2017"
          />,
          !onlyMedia,
        )}
        <CardMedia>
          <img
            src={"https://material-ui-1dab0.firebaseapp.com/build/abd50bc0e11052fea9669f18f0c017bc.jpg"}
            alt="Reptile"
            className={classes.block}
          />
        </CardMedia>

        {isShow(
          <div>
            <CardActions>
              <Love
                liked={this.state.liked}
                onClick={() => this.setState({ liked: !this.state.liked })}
              />
            </CardActions>
            <CardContent className={classes.content}>
              <Typography component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica</Typography>
              <div className={classes.comments}>
                {comments}
              </div>
              <div className={classes.commentPost}>
                <PostCommentForm />
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
}

PhotoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  onlyMedia: PropTypes.bool,
  raised: PropTypes.bool,
}

export default withStyles(styleSheet)(PhotoCard)
