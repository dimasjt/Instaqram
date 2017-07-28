import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { connect } from "react-redux"
import { withApollo } from "react-apollo"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"

import Upload from "./Upload"

import { logoutUser } from "../actions/user"

const styleSheet = createStyleSheet("ButtonAppBar", {
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
})

const Header = ({ classes, currentUser, client, actions }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link to="/" className={classes.flex}>
          <Typography type="title" color="accent">
            Instaqrams
          </Typography>
        </Link>
        {
          currentUser ? (
            <div className={classes.row}>
              <Upload />
              <Button
                color="contrast"
                onClick={() => {
                  client.resetStore()
                  actions.logoutUser()
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className={classes.row}>
              <Button color="contrast" component={Link} to="/login">Login</Button>
              <Button color="contrast" component={Link} to="/register">Register</Button>
            </div>
          )
        }
      </Toolbar>
    </AppBar>
  )
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
