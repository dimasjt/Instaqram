import React from "react"
import { TextField } from "material-ui"
import { graphql } from "react-apollo"
import PropTypes from "prop-types"

import { COMMENT_PHOTO } from "../../mutations"

class PostCommentForm extends React.Component {
  constructor() {
    super()

    this.state = {
      content: "",
    }
  }
  submitComment = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()

      const { content } = this.state
      if (content) {
        this.setState({ content: "" })

        this.props.submit(this.props.photo.id, content)
      }
    }
  }
  render() {
    return (
      <form>
        <TextField
          placeholder="Add a comment..."
          fullWidth
          onChange={(event) => this.setState({ content: event.target.value })}
          onKeyPress={this.submitComment}
          value={this.state.content}
        />
      </form>
    )
  }
}

PostCommentForm.propTypes = {
  photo: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
}

export default graphql(COMMENT_PHOTO, {
  props: ({ ownProps, mutate }) => ({
    submit(photoId, content) {
      mutate({
        variables: { photo_id: photoId, content },
        updateQueries: {
          feed: (prev, { mutationResult: { data: commentPhoto } }) => {
            return Object.assign({}, prev, {
              ...prev,
              feed: prev.feed.map((p) => {
                if (p.id === ownProps.photo.id) {
                  return {
                    ...p,
                    comments: [
                      ...p.comments,
                      commentPhoto.commentPhoto,
                    ],
                  }
                }

                return p
              }),
            })
          },
        },
      })
    },
  }),
})(PostCommentForm)
