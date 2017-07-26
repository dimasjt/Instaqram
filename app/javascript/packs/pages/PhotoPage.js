import React from "react"
import { Grid, Paper, Avatar, Typography } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import Comment from "../components/Comment"

const styleSheet = createStyleSheet("PhotoPage", () => ({
  container: {
    width: "80%",
    margin: "0 auto",
  },
  image: {
    width: "100%",
  },
  profile: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    alignItems: "center",
  },
  username: {
    marginLeft: "20px",
  },
  content: {
    padding: "8px 16px",
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
}))

class PhotoPage extends React.Component {
  linkFor(component, to) {
    return <Link to={to}>{component}</Link>
  }
  render() {
    const { classes } = this.props

    const comments = [1, 2, 3, 4, 5, 6].map((id) => {
      return <Comment linkFor={this.linkFor} key={id} />
    })

    return (
      <div className={classes.container}>
        <Paper elevation={2}>
          <Grid container gutter={0}>
            <Grid item xs={8}>
              <img
                src="https://material-ui-1dab0.firebaseapp.com/build/abd50bc0e11052fea9669f18f0c017bc.jpg"
                alt="post"
                className={classes.image}
              />
            </Grid>
            <Grid item xs={4} className={classes.content}>
              <div className={classes.profile}>
                {this.linkFor(
                  <Avatar
                    src="https://material-ui-1dab0.firebaseapp.com/build/b16427bb030d63fd8e52ea84defda1d1.jpg"
                    alt="Profile"
                  />,
                  "/users/dimasjt",
                )}
                {this.linkFor(
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
