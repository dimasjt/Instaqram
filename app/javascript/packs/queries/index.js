import { gql } from "react-apollo"

export const GET_USER = gql`
  query user{
    user(username: "dimasjt"){
      id
      username
      name
      caption
      photos_count
      photos {
        id
        caption
        image {
          original
        }
      }
    }
  }
`
