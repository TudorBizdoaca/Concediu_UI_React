import { gql } from '@apollo/client'

export const GET_EMPLOYEE = gql`
  query employeeData($IdAngajat: Int) {
    employeeData(IdAngajat: $IdAngajat) {
      id
      nume
      prenume
      email
      parola
      dataAngajare
      dataNasterii
      cnp
      serie
      no
      nrTelefon
      poza
      esteAdmin
      managerId
      zileConcediu
    }
  }
`
