import React from 'react'
import { useApolloClient } from '@apollo/client'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { gql } from '@apollo/client'

const USER_DATA_QUERY = gql`
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

const UserDataProvider = () => {
  const client = useApolloClient()
  const email = JSON.parse(localStorage.getItem('token'))
  useQueryWithErrorHandling(USER_DATA_QUERY, {
    variables: { email: encodeURIComponent(email) },
    onCompleted: data => {
      client.writeQuery({
        query: USER_DATA_QUERY,
        data: { userData: data.userData }
      })
    }
  })
  return <></>
}

export default UserDataProvider
