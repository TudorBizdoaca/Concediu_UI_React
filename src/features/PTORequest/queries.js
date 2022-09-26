import { gql } from '@apollo/client'

export const USER_DATA_QUERY = gql`
  query userData {
    userData {
      id
      isAdmin
    }
  }
`
