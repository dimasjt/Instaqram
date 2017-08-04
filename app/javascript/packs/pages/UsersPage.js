import React from "react"
import List, { ListItem, ListItemText } from "material-ui/List"
import { withStyles, createStyleSheet } from "material-ui/styles"
import { Typography, Paper, Avatar } from "material-ui"
import { graphql } from "react-apollo"
import { Link } from "react-router-dom"
import pl from "pluralize"
import PropTypes from "prop-types"

import FollowButton from "../components/FollowButton"

import { GET_USERS } from "../queries"

const styleSheet = createStyleSheet("UsersPage", () => ({
  container: {
    width: "40%",
    margin: "0 auto",
  },
  title: {
    padding: "20px",
  },
}))

class UsersPage extends React.Component {
  render() {
    const { classes, data, history } = this.props

    if (data.loading) {
      return null
    }

    const users = data.users.map((user) => {
      const link = <Link to={`/users/${user.username}`}><Typography>{user.username}</Typography></Link>
      return (
        <ListItem key={user.id} button>
          <Avatar src={user.image.thumb} alt={user.username} />
          <ListItemText
            primary={link}
            secondary={`${user.photos_count} ${pl("Photo", user.photos_count)}`}
          />
          <FollowButton user={user} history={history} />
        </ListItem>
      )
    })

    return (
      <div className={classes.container}>
        <Paper>
          <Typography type="title" className={classes.title}>Browse Users</Typography>
          <List>{users}</List>
        </Paper>
      </div>
    )
  }
}

UsersPage.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const WithStyle = withStyles(styleSheet)(UsersPage)

export default graphql(GET_USERS)(WithStyle)
