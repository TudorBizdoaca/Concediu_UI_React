import React, { useState } from 'react'
import VacationComponent from 'features/vacations/VacationComponent'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_VACATIONS } from './queries'
import useUserData from 'hooks/useUserData'

function VacationsContainer() {
  const [state, setState] = useState(null)
  const userCacheData = useUserData()
  useQueryWithErrorHandling(GET_VACATIONS, {
    variables: { position: 1, isAdmin: userCacheData.esteAdmin, id: userCacheData.id },
    onCompleted: data => setState(data.vacationsData),
    skip: !userCacheData.esteAdmin || !userCacheData.id
  })

  return <VacationComponent arr={state || []}></VacationComponent>
}

export default VacationsContainer
