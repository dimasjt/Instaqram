import { gql } from "react-apollo"

export default gql`
  mutation register($user: Register!){
    register(user: $user) {
      auth_token
    }
  }
`
