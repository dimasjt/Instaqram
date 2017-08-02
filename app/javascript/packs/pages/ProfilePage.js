import React from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { Avatar, Typography, Grid, Button, Paper } from "material-ui"
import PropTypes from "prop-types"
import SyncIcon from "material-ui-icons/Sync"
import { Link } from "react-router-dom"
import { graphql, compose } from "react-apollo"
import { connect } from "react-redux"

import UpdateProfile from "../components/UpdateProfile"

import { GET_USER } from "../queries"
import { FOLLOW_USER, UNFOLLOW_USER } from "../mutations"

const styleSheet = createStyleSheet("ProfilePage", () => ({
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
  item: {
    width: "300px",
    height: "300px",
    marginBottom: "20px",
  },
  itemPaper: {
    height: "100%",
    width: "100%",
    padding: 3,
    textAlign: "center",
    lineHeight: "300px",
  },
  itemImage: {
    lineHeight: "300px",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  profile: {
    marginBottom: "22px",
  },
  center: {
    textAlign: "center",
  },
}))

class ProfilePage extends React.Component {
  constructor() {
    super()

    this.state = { edit: false }
  }
  follow = () => {
    if (this.user.followed) {
      this.props.unfollowUser({ variables: { user_id: this.user.id } })
    } else {
      this.props.followUser({ variables: { user_id: this.user.id } })
    }
  }
  ownProfile() {
    const { currentUser, match } = this.props
    if (currentUser.username === match.params.username) {
      return <Button color="primary" onClick={() => this.setState({ edit: true })}>Edit Profile</Button>
    }
    return (
      <Button
        color="primary"
        onClick={this.follow}
      >
        {this.user.followed ? "Unfollow" : "Follow"}
      </Button>
    )
  }
  render() {
    const { classes, data } = this.props
    const user = data.user || {}
    const photos = user.photos || []

    const list = photos.map((photo) => {
      return (
        <Grid className={classes.item} item xs={4} key={photo.id}>
          <Link to={`/photos/${photo.id}`}>
            <Paper className={classes.itemPaper} elevation={4}>
              <img src={photo.image.medium} alt={photo.caption} className={classes.itemImage} />
            </Paper>
          </Link>
        </Grid>
      )
    })

    if (data.loading) {
      return null
    }

    this.user = user

    return (
      <div className={classes.root}>
        <Grid
          container
          gutter={16}
          justify="flex-start"
          align="center"
          direction="row"
          className={classes.profile}
        >
          <Grid item xs={4}>
            <Avatar
              src={user.image.small}
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
                <Grid container justify="space-between" align="center">
                  <Typography component="h2" type="display1">{user.username}</Typography>
                  {this.ownProfile()}
                  <UpdateProfile
                    close={() => this.setState({ edit: false })}
                    open={this.state.edit}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" align="center" gutter={24}>
                  <Grid item xs={3}>
                    <Typography component="h4" type="subheading">
                      Photos {user.photos_count}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography component="h4" type="subheading">
                      <a>Folowers 100</a>
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography component="h4" type="subheading">
                      <a>Followings 100</a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h4" type="title">
                  {user.name}
                </Typography>
                <Typography component="p">
                  {user.caption}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          align="center"
          direction="row"
          justify="flex-start"
          gutter={24}
          className={classes.list}
        >
          {list}
        </Grid>
        <Grid container gutter={24} align="center" justify="center" direction="row">
          <Grid item xs={3} className={classes.center}>
            <Button fab color="primary"><SyncIcon /></Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

ProfilePage.defaultProps = {
  data: {
    user: {
      image: {},
      photos: [],
    },
  },
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    user: PropTypes.shape({
      image: PropTypes.object,
      photos: PropTypes.array,
    }),
  }).isRequired,
  currentUser: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
}

const WithStyle = withStyles(styleSheet)(ProfilePage)
const Connected = connect(
  (state) => state,
)(WithStyle)

export default compose(
  graphql(GET_USER, {
    options: ({ match }) => ({ variables: { username: match.params.username } }),
  }),
  graphql(FOLLOW_USER, { name: "followUser" }),
  graphql(UNFOLLOW_USER, { name: "unfollowUser" }),
)(Connected)
