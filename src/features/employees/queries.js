import { gql } from '@apollo/client'

export const GET_EMPLOYEES = gql`
  query employeesData($position: Int, $query: String) {
    employeesData(position: $position, query: $query) {
      listaAngajati {
        id
        nume
        prenume
        poza
        email
        nrTelefon
      }
      nrAngajati
    }
  }
`
