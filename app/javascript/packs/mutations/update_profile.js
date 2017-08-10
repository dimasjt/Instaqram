import { gql } from "react-apollo"

// export default gql`
//   mutation updateProfile($user: UpdateProfile!) {
//     updateProfile(user: $user) {
//       id
//       name
//       email
//       caption
//       website
//       birthdate
//       username
//       image {
//         thumb
//         small
//         medium
//         large
//         original
//       }
//     }
//   }
// `

export default gql`
  mutation updateProfile($user: UpdateProfile!) {
    updateProfile(user: $user) {
      auth_token
    }
  }
`
