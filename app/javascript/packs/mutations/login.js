import { gql } from "react-apollo"

export default gql`
  mutation login($user: Auth!) {
    login(user: $user) {
      auth_token
    }
  }
`
