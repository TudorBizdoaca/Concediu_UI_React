import { gql } from '@apollo/client'

export const GET_MANAGERI = gql`
  query getManageri {
    getManageri {
      id
      NumeIntreg
    }
  }
`
