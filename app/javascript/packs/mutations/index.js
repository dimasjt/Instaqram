import { gql } from "react-apollo"

export const REGISTER = gql`
  mutation register($user: Register!){
    register(user: $user) {
      auth_token
    }
  }
`
