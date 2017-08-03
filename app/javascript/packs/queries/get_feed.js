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
