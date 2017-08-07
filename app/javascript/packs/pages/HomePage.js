import React from "react"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { graphql } from "react-apollo"
import { Grid, Button } from "material-ui"
import SyncIcon from "material-ui-icons/Sync"
import PropTypes from "prop-types"

import { GET_FEED } from "../queries"

import PhotoCard from "../components/PhotoCard"

const styleSheet = createStyleSheet("HomePage", (theme) => ({
  root: theme.mixins.gutters({
    padding: "20px",
  }),
  container: {
    width: "40%",
    margin: "0 auto",
  },
  center: {
    textAlign: "center",
  },
}))

class HomePage extends React.Component {
  constructor() {
    super()

    this.state = {
      page: 2,
      fetched: false,
    }
  }
  loadMore = () => {
    this.props.loadMore(this.state.page).then(() => {
      this.setState({ page: this.state.page + 1 })
    })
  }
  loadMoreShow() {
    const { loading } = this.props.data
    if (!loading) {
      return (
        <Grid container gutter={24} align="center" justify="center" direction="row">
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

    if (data.loading && data.networkStatus !== 3) {
      return null
    }

    const list = data.feed.map((photo) => <PhotoCard key={photo.id} photo={photo} />)
    return (
      <div className={classes.container}>
        {list}
        {this.loadMoreShow()}
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    feed: PropTypes.array,
    loading: PropTypes.bool,
  }).isRequired,
  loadMore: PropTypes.func.isRequired,
}

const WithStyle = withStyles(styleSheet)(HomePage)

export default graphql(GET_FEED, {
  props(props) {
    return {
      ...props,
      loadMore(page) {
        return props.data.fetchMore({
          variables: { page },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.feed.length) {
              return prev
            }
            return Object.assign({}, prev, {
              feed: [
                ...prev.feed,
                ...fetchMoreResult.feed,
              ],
            })
          },
        })
      },
    }
  },
})(WithStyle)
