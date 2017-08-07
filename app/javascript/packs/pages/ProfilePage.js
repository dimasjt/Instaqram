import React from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { Typography, Grid, Button, Paper } from "material-ui"
import PropTypes from "prop-types"
import SyncIcon from "material-ui-icons/Sync"
import { Link } from "react-router-dom"
import { graphql } from "react-apollo"
import { connect } from "react-redux"

import UpdateProfile from "../components/UpdateProfile"
import FollowButton from "../components/FollowButton"
import ProfilePicture from "../components/ProfilePicture"

import { GET_USER } from "../queries"

const styleSheet = createStyleSheet("ProfilePage", () => ({
  root: {
    width: "80%",
    margin: "0 auto",
  },
  list: {
    flexGrow: 1,
  },
  item: {
    width: "300px",
    height: "300px",
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
  loadMore: {
    margin: "25px 0 25px 0",
  },
}))

class ProfilePage extends React.Component {
  constructor() {
    super()

    this.state = { edit: false, page: 2 }
  }
  ownProfile() {
    const { currentUser, match, history } = this.props
    if (currentUser && currentUser.username === match.params.username) {
      return <Button color="primary" onClick={() => this.setState({ edit: true })}>Edit Profile</Button>
    }

    return <FollowButton user={this.user} history={history} />
  }
  loadMore = () => {
    this.props.loadMore(this.state.page).then(() => {
      this.setState({ page: this.state.page + 1 })
    })
  }
  loadMoreShow() {
    const { loading, user } = this.props.data
    if (!loading && (user.photos.length < user.photos_count)) {
      return (
        <Grid
          container
          gutter={24}
          align="center"
          justify="center"
          direction="row"
          className={this.props.classes.loadMore}
        >
          <Grid item xs={3} className={this.props.classes.center}>
            <Button fab color="primary" onClick={this.loadMore}>
              <SyncIcon />
            </Button>
          </Grid>
        </Grid>
      )
    }
    return null
  }
  render() {
    const { classes, data } = this.props
    const user = data.user || {}
    const photos = user.photos || []

    const list = photos.map((photo) => {
      const style = {
        backgroundImage: `url(${photo.image.medium})`,
        backgroundSize: "cover",
      }
      return (
        <Grid className={classes.item} item xs={4} key={photo.id}>
          <Link to={`/photos/${photo.id}`}>
            <Paper
              className={classes.itemPaper}
              elevation={1}
              style={style}
            />
          </Link>
        </Grid>
      )
    })

    if (data.loading && !user.id) {
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
            <ProfilePicture user={user} />
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
                      <a>Folowers {user.followers_count}</a>
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography component="h4" type="subheading">
                      <a>Followings {user.followings_count}</a>
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
          gutter={16}
          className={classes.list}
        >
          {list}
        </Grid>
        {this.loadMoreShow()}
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

ProfilePage.defaultProps = {
  currentUser: null,
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    user: PropTypes.shape({
      image: PropTypes.object,
      photos: PropTypes.array,
    }),
    loading: PropTypes.bool,
  }).isRequired,
  currentUser: PropTypes.object,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loadMore: PropTypes.func.isRequired,
}

const WithStyle = withStyles(styleSheet)(ProfilePage)
const Connected = connect(
  (state) => state,
)(WithStyle)

export default graphql(GET_USER, {
  options: ({ match }) => ({ variables: { username: match.params.username } }),
  props(props) {
    return {
      ...props,
      loadMore(page) {
        return props.data.fetchMore({
          variables: { page },
          updateQuery: (prev, { fetchMoreResult }) => {
            return Object.assign({}, prev, {
              user: {
                ...fetchMoreResult.user,
                photos: [
                  ...prev.user.photos,
                  ...fetchMoreResult.user.photos,
                ],
              },
            })
          },
        })
      },
    }
  },
})(Connected)
