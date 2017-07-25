import React from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { Avatar, Typography, Grid } from "material-ui"
import PropTypes from "prop-types"

import PhotoCard from "../components/PhotoCard"

const styleSheet = createStyleSheet("ProfilePage", (theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
  },
  avatar: {
    width: 200,
    height: 200,
    margin: "0 auto",
  },
  list: {
    flexGrow: 1,
  },
  profile: {
    marginBottom: "22px",
  },
}))

class ProfilePage extends React.Component {
  render() {
    const { classes } = this.props

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => {
      return (
        <Grid item xs={4}>
          <PhotoCard onlyMedia key={id} />
        </Grid>
      )
    })

    return (
      <div className={classes.root}>
        <Grid
          container
          gutter={12}
          justify="flex-start"
          align="center"
          direction="row"
          className={classes.profile}
        >
          <Grid item xs={4}>
            <Avatar
              src="https://material-ui-1dab0.firebaseapp.com/build/b16427bb030d63fd8e52ea84defda1d1.jpg"
              alt="Profile"
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid
              container
              gutter={24}
              direction="column"
              justify="center"
              align="stretch"
            >
              <Grid item xs={12}>
                <Typography component="h2" type="display1">dimasjt</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" gutter={24}>
                  <Grid item xs={3}>
                    <Typography component="h4" type="subheading">Photos 100</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography component="h4" type="subheading">Photos 100</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography component="h4" type="subheading">Photos 100</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h4" type="title">Steven Paul Jobs</Typography>
                <Typography component="p">was an American entrepreneur, businessman, inventor, and industrial designer. He was the co-founder, chairman, and chief executive officer of Apple Inc.</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          align="center"
          direction="row"
          justify="center"
          gutter={24}
          className={classes.list}
        >
          {list}
        </Grid>
      </div>
    )
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(ProfilePage)