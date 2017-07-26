import React from "react"
import { TextField } from "material-ui"

const PostCommentForm = () => {
  return (
    <form>
      <TextField
        placeholder="Add a comment..."
        fullWidth
      />
    </form>
  )
}

export default PostCommentForm
