import { gql } from "react-apollo"

export default gql`
  query feed($page: Int) {
    feed(page: $page) {
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
        unix
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
