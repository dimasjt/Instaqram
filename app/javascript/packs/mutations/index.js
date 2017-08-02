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
    }
  }
`

export const LIKE_PHOTO = gql`
  mutation likePhoto($photo_id: ID!) {
    likePhoto(photo_id: $photo_id) {
      id
      likes_count
      liked
    }
  }
`

export const UNLIKE_PHOTO = gql`
  mutation unlikePhoto($photo_id: ID!) {
    unlikePhoto(photo_id: $photo_id) {
      id
      likes_count
      liked
    }
  }
`

export const COMMENT_PHOTO = gql`
  mutation commentPhoto($photo_id: ID!, $content: String!) {
    commentPhoto(photo_id: $photo_id, content: $content) {
      id
      content
      user {
        id
        username
      }
    }
  }
`

export const FOLLOW_USER = gql`
  mutation follow($user_id: ID!) {
    follow(user_id: $user_id)
  }
`
