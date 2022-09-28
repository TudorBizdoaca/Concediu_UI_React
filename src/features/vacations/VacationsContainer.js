import React, { useEffect, useState } from 'react'
import VacationComponent from 'features/vacations/VacationComponent'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_VACATIONS } from './queries'

// function createData(id, name, manager, vacationtype, replacement, startingdate, endingdate, state, reason) {
//   return { id, name, manager, vacationtype, replacement, startingdate, endingdate, state, reason }
// }

// const rows = [
//   createData(0, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData(1, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData(2, 'Eclair', 262, 16.0, 24, 6.0),
//   createData(3, 'Cupcake', 305, 3.7, 67, 4.3),
//   createData(4, 'Gingerbread', 356, 16.0, 49, 3.9)
// ]

function VacationsContainer() {
  const [state, setState] = useState(null)
  useQueryWithErrorHandling(GET_VACATIONS, {
    variables: { position: 1, isAdmin: true, id: 20 },
    onCompleted: data => setState(data.vacationsData)
  })

  return <VacationComponent arr={state || []}></VacationComponent>
}

export default VacationsContainer
