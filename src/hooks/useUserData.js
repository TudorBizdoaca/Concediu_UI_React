import { useEffect, useState } from 'react'
import { useQueryWithErrorHandling } from './errorHandling'
import { USER_DATA_QUERY } from './queries'
const { useApolloClient } = require('@apollo/client')

const useUserData = () => {
  const client = useApolloClient()

  const { data } = useQueryWithErrorHandling(USER_DATA_QUERY, { fetchPolicy: 'cache-only' })
  const cacheUserData = data?.userData || {
    id: 0,
    nume: '',
    prenume: '',
    email: '',
    parola: '',
    dataAngajare: '',
    dataNasterii: '',
    cnp: '',
    serie: '',
    no: '',
    nrTelefon: '',
    poza: '',
    esteAdmin: false,
    managerId: null,
    zileConcediu: ''
  }

  const [userData, setUserData] = useState(cacheUserData)

  useEffect(() => {
    const sub = client.watchQuery({ query: USER_DATA_QUERY, fetchPolicy: 'cache-only' }).subscribe({
      next: ({ data }) => {
        const userData = data?.userData || {}
        setUserData({ ...(userData || []) })
      }
    })
    return () => sub.unsubscribe()
  }, [client])

  return userData
}

export default useUserData
