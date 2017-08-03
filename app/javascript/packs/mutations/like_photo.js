import { gql } from "react-apollo"

export default gql`
  mutation likePhoto($photo_id: ID!) {
    likePhoto(photo_id: $photo_id) {
      id
      likes_count
      liked
    }
  }
`
