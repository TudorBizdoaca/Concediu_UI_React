import { gql } from '@apollo/client'

export const NRZILE_CONCEDIU_QUERY = gql`
  query ExampleQuery($zileConcediuId2: Int) {
    ZileConcediu(Id: $zileConcediuId2) {
      id
      nrZile
    }
  }
`
export const TIPURI_CONCEDIU_QUERY = gql`
  query ExampleQuery {
    TipuriConcediu {
      id
      nume
      cod
    }
  }
`
export const INLOCUITORI_QUERY = gql`
  query ExampleQuery($id: Int) {
    Inlocuitori(Id: $id) {
      id
      nume
    }
  }
`
export const MUTATION = gql`
  mutation InsertConcediu($input: inputConcediu) {
    insertConcediu(input: $input)
  }
`
