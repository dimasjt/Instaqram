import { gql } from "react-apollo"

export default gql`
  query photo($id: ID!){
    photo(id: $id) {
      id
      caption
      likes_count
      comments_count
      liked
      created_at {
        human
      }
      image {
        original
        large
      }
      user {
        id
        username
        image {
          thumb
        }
      }
      comments {
        id
        content
        user {
          id
          username
        }
      }
    }
  }
`
