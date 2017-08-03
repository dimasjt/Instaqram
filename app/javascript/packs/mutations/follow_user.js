import { gql } from "react-apollo"

export default gql`
  mutation follow($user_id: ID!) {
    follow(user_id: $user_id)
  }
`
