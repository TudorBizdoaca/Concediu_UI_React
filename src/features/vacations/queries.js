import { gql } from '@apollo/client'

export const GET_VACATIONS = gql`
  query vacationsData($position: Int, $isAdmin: Boolean, $id: Int) {
    vacationsData(position: $position, isAdmin: $isAdmin, id: $id) {
      nume
      numeManager
      idManager
      tipConcediu
      numeInlocuitor
      dataInceput
      dataSfarsit
      stareConcediu
      id
    }
  }
`

export const GET_DETAILS = gql`
  query detailsData($id: Int) {
    detailsData(id: $id) {
      nume
      numeManager
      tipConcediu
      inlocuitor
      stareConcediu
      id
      dataInceput
      dataSfarsit
      motivRespingere
      comentarii
    }
  }
`
