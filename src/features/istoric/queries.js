import { gql } from '@apollo/client'

export const GET_HOLIDAY_HISTORY = gql`
  query GetIstoricConcedii($id: Int) {
    getIstoricConcedii(Id: $id) {
      id
      dataInceput
      dataSfarsit
      motivRespingere
      Inlocuitor
      Tip
      Status
    }
  }
`
