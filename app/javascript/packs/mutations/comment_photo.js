import { gql } from "react-apollo"

export default gql`
  mutation commentPhoto($photo_id: ID!, $content: String!) {
    commentPhoto(photo_id: $photo_id, content: $content) {
      id
      content
      user {
        id
        username
      }
    }
  }
`
