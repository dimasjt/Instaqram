import { gql } from "react-apollo"

export default gql`
  mutation deletePhoto($id: ID!) {
    deletePhoto(id: $id) {
      id
    }
  }
`
