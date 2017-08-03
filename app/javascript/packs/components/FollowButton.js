import React from "react"
import { Button } from "material-ui"
import PropTypes from "prop-types"
import { graphql } from "react-apollo"

import { FOLLOW_USER } from "../mutations"
import { GET_USER, GET_USERS } from "../queries"

const FollowButton = ({ user: { followed, id }, follow }) => {
  const followText = followed ? "Unfollow" : "Follow"
  const followColor = followed ? "accent" : "primary"
  return (
    <Button
      color={followColor}
      onClick={() => follow(id)}
    >
      {followText}
    </Button>
  )
}

FollowButton.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    followed: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  follow: PropTypes.func.isRequired,
}

export default graphql(FOLLOW_USER, {
  props: ({ ownProps, mutate }) => ({
    follow(userId) {
      mutate({
        variables: { user_id: userId },
        update: (store, { data: { follow } }) => {
          const getUser = { query: GET_USER, variables: { username: ownProps.user.username } }
          const getUserPrev = store.readQuery(getUser)
          const getUserNew = Object.assign({}, getUserPrev, {
            user: {
              ...getUserPrev.user,
              followed: !!follow,
            },
          })
          store.writeQuery({ ...getUser, data: getUserNew })

          const getUsers = { query: GET_USERS }
          const getUsersPrev = store.readQuery(getUsers)
          const getUsersNew = Object.assign({}, getUsersPrev, {
            ...getUsersPrev,
            users: getUsersPrev.users.map((u) => {
              if (u.id === ownProps.user.id) {
                return {
                  ...u,
                  followed: !!follow,
                }
              }

              return u
            }),
          })
          store.writeQuery({ ...getUsers, data: getUsersNew })
        },
      })
    },
  }),
})(FollowButton)
