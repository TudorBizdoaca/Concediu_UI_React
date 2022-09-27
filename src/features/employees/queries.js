import { gql } from '@apollo/client'

export const GET_EMPLOYEES = gql`
  query EmployeesData($position: Int, $query: String) {
    employeesData(position: $position, query: $query) {
      id
      nume
      prenume
      poza
      email
      nrTelefon
    }
  }
`
