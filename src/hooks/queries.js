import { gql } from '@apollo/client'

export const USER_DATA_QUERY = gql`
  query userData($email: String!) {
    userData(email: $email) {
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
