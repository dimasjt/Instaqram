import { gql } from "react-apollo"

export default gql`
  mutation postPhoto($photo: PostPhoto!, $image_id: ID!) {
    postPhoto(photo: $photo, image_id: $image_id) {
      id
    }
  }
`
