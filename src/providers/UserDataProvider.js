import React from 'react'
import { useApolloClient } from '@apollo/client'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { USER_DATA_QUERY } from 'hooks/queries'

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
