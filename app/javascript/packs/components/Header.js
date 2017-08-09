import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Avatar, IconButton } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import Menu, { MenuItem } from "material-ui/Menu"
import { connect } from "react-redux"
import { withApollo } from "react-apollo"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"
import PhotoCameraIcon from "material-ui-icons/PhotoCamera"

import Upload from "./Upload"

import { logoutUser } from "../actions/user"

const styleSheet = createStyleSheet("ButtonAppBar", (theme) => ({
  root: {
    marginTop: 30,
    width: "100%",
  },
  flex: {
    flex: 1,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  appBar: {
    backgroundColor: theme.light,
  },
  toolbarRoot: {
    paddingLeft: "140px",
    paddingRight: "140px",
  },
  brand: {
    color: theme.lighter,
    display: "flex",
  },
  white: {
    color: "#fff",
  },
}))

class Header extends React.Component {
  constructor() {
    super()

    this.state = { open: false, target: undefined }
  }
  logout = () => {
    this.close()
    this.props.client.resetStore()
    this.props.actions.logoutUser()
  }
  openMenu = (event) => {
    this.setState({ open: true, target: event.currentTarget })
  }
  close = () => {
    this.setState({ open: false })
  }
  render() {
    const { classes, currentUser } = this.props
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          <Link to="/" className={classes.flex}>
            <Typography type="title" className={classes.brand}>
              <PhotoCameraIcon />
              <span>
                Instaqram
              </span>
            </Typography>
          </Link>
          <Button className={classes.white} component={Link} to="/browse/users">Browse</Button>
          {
            currentUser ? (
              <div className={classes.row}>
                <Upload />
                <IconButton onClick={this.openMenu}>
                  <Avatar src={currentUser.image.thumb} />
                </IconButton>
                <Menu
                  anchorEl={this.state.target}
                  open={this.state.open}
                  onRequestClose={this.close}
                >
                  <MenuItem component={Link} to={`/users/${currentUser.username}`} onClick={this.close}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={this.logout}>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div className={classes.row}>
                <Button className={classes.white} component={Link} to="/login">Login</Button>
                <Button className={classes.white} component={Link} to="/register">Register</Button>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
    )
  }
}

Header.defaultProps = {
  currentUser: null,
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  client: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

const WithStyle = withStyles(styleSheet)(Header)
const Connected = connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators({ logoutUser }, dispatch) }),
)(WithStyle)

export default withApollo(Connected)
