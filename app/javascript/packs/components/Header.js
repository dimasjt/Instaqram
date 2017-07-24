import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, IconButton, Typography, Button } from "material-ui"
import MenuIcon from "material-ui-icons/Menu"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"

const styleSheet = createStyleSheet("ButtonAppBar", {
  root: {
    marginTop: 30,
    width: "100%",
  },
  flex: {
    flex: 1,
  },
})

const Header = ({ classes }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link to="/" className={classes.flex}>
          <Typography type="title" color="contrast">
            Instaqram
          </Typography>
        </Link>
        {/* <IconButton color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton> */}
        <Button color="contrast" component={Link} to="/login">Login</Button>
        <Button color="contrast" component={Link} to="/register">Register</Button>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(Header)
