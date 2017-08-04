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
      followings_count
      followers_count
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
