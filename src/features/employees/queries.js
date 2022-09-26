import { gql } from '@apollo/client'

export const GET_EMPLOYEES = gql`
  query EmployeesData($position: Int) {
    employeesData(position: $position) {
      id
      nume
      prenume
      poza
      email
      nrTelefon
    }
  }
`
