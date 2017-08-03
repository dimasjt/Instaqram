import { gql } from "react-apollo"

export default gql`
  query users {
    users {
      id
      username
      name
      photos_count
      followed
      image {
        thumb
      }
    }
  }
`
