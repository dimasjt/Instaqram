import { gql } from "react-apollo"

export const REGISTER = gql`
  mutation register($user: Register!){
    register(user: $user) {
      auth_token
    }
  }
`

export const LOGIN = gql`
  mutation login($user: Auth!) {
    login(user: $user) {
      auth_token
    }
  }
`

export const UPDATE_PROFILE = gql`
  mutation updateProfile($user: UpdateProfile!) {
    updateProfile(user: $user) {
      id
      name
      email
      caption
      website
      birthdate
      username
      image {
        thumb
        small
        medium
        large
        original
      }
    }
  }
`

export const POST_PHOTO = gql`
  mutation postPhoto($photo: PostPhoto!, $image_id: ID!) {
    postPhoto(photo: $photo, image_id: $image_id) {
      id
      caption
      image {
        thumb
        small
        medium
        large
        original
      }
    }
  }
`
