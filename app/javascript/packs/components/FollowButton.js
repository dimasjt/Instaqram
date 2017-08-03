import React from "react"
import { Button } from "material-ui"
import PropTypes from "prop-types"
import { graphql } from "react-apollo"

import { FOLLOW_USER } from "../mutations"

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
        updateQueries: {
          users: (prev, { mutationResult: { data } }) => {
            return Object.assign({}, prev, {
              users: prev.users.map((u) => {
                if (u.id === ownProps.user.id) {
                  return {
                    ...u,
                    followed: !!data.follow,
                  }
                }
                return u
              }),
            })
          },
        },
      })
    },
  }),
})(FollowButton)
