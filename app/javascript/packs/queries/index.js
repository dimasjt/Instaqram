import { gql } from "react-apollo"

export const GET_USER = gql`
  query user($username: String!){
    user(username: $username){
      id
      username
      name
      caption
      photos_count
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

export const GET_PHOTO = gql`
  query photo($id: ID!){
    photo(id: $id) {
      id
      caption
      likes_count
      comments_count
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
    }
  }
`
