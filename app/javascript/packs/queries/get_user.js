import { gql } from "react-apollo"

export default gql`
  query user($username: String!){
    user(username: $username){
      id
      username
      name
      caption
      photos_count
      followed
      image {
        small
      }
      photos {
        id
        caption
        image {
          original
          medium
        }
      }
    }
  }
`
