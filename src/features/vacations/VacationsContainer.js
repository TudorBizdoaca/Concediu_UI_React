import React, { useState } from 'react'
import VacationComponent from 'features/vacations/VacationComponent'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_VACATIONS } from './queries'
import useUserData from 'hooks/useUserData'

function VacationsContainer() {
  const [state, setState] = useState(null)
  const userCacheData = useUserData()
  const id_logat = userCacheData.id
  useQueryWithErrorHandling(GET_VACATIONS, {
    variables: { position: 1, isAdmin: userCacheData.esteAdmin, id: id_logat },
    onCompleted: data => setState(data.vacationsData)
  })
  // useQueryWithErrorHandling(GET_VACATIONS_NO, {
  //   variables: { isAdmin: userCacheData.esteAdmin, id: userCacheData.managerId },
  //   onCompleted: data => setState(data.vacationsNo)
  // })

  return <VacationComponent arr={state || []}></VacationComponent>
}

export default VacationsContainer
