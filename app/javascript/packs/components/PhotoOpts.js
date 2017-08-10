import React from "react"
import PropTypes from "prop-types"
import { IconButton } from "material-ui"
import MoreVertIcon from "material-ui-icons/MoreVert"
import Menu, { MenuItem } from "material-ui/Menu"
import { graphql } from "react-apollo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { DELETE_PHOTO } from "../mutations"

import * as alertActions from "../actions/alert"

import { isShow } from "../utils/helpers"

class PhotoOpts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      target: null,
    }
  }
  openMenu = (event) => {
    this.setState({ open: true, target: event.currentTarget })
  }
  close = () => {
    this.setState({ open: false })
  }
  deletePhoto = () => {
    this.props.deletePhoto(this.props.photo.id).then(() => {
      this.props.history.push(`/users/${this.props.currentUser.username}`)
      this.props.actions.showAlert("Photo deleted.")
    })
  }
  render() {
    const { currentUser, photo } = this.props
    return (
      <div>
        <IconButton onClick={this.openMenu}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={this.state.target}
          open={this.state.open}
          onRequestClose={this.close}
        >
          <div>
            {isShow(
              <div>
                <MenuItem>Edit</MenuItem>
                <MenuItem onClick={this.deletePhoto}>Delete</MenuItem>
              </div>,
              currentUser && currentUser.id.toString() === photo.user.id,
            )}
            <MenuItem>Share</MenuItem>
          </div>
        </Menu>
      </div>
    )
  }
}

PhotoOpts.propTypes = {
  photo: PropTypes.object.isRequired,
  deletePhoto: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    showAlert: PropTypes.func.isRequired,
  }).isRequired,
  currentUser: PropTypes.object.isRequired,
}

const Connected = connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(alertActions, dispatch) }),
)(PhotoOpts)

export default graphql(DELETE_PHOTO, {
  props: ({ mutate }) => ({
    deletePhoto: (id) => {
      return mutate({
        variables: { id },
        updateQueries: {
          feed: (prev) => {
            return Object.assign({}, {
              ...prev,
              feed: prev.feed.filter((feed) => {
                return feed.id !== id
              }),
            })
          },
        },
      })
    },
  }),
})(Connected)
