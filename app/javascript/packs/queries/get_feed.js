import { gql } from "react-apollo"

export default gql`
  query feed {
    feed {
      id
      caption
      comments_count
      likes_count
      liked
      image {
        medium
      }
      created_at {
        human
      }
      comments {
        id
        content
        user {
          id
          username
        }
      }
      user {
        id
        username
        image {
          thumb
        }
      }
    }
  }
`
