import { gql } from '@apollo/client'

export const TIPURI_CONCEDIU_QUERY = gql`
  query ExampleQuery($zileConcediuId2: Int) {
    ZileConcediu(Id: $zileConcediuId2) {
      id
      nrZile
    }
  }
`
