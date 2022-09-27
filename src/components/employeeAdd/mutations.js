import { gql } from '@apollo/client'

export const POST_EMPLOYEE = gql`
  mutation CreateUserData($input: UserInput) {
    createUserData(input: $input)
  }
`
