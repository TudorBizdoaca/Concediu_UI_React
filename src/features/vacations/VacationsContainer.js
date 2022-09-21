import React from 'react'
import VacationComponent from 'features/vacations/VacationComponent'

function createData(id, name, manager, vacationtype, replacement, startingdate, endingdate, state, reason) {
  return { id, name, manager, vacationtype, replacement, startingdate, endingdate, state, reason }
}

const rows = [
  createData(0, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(1, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(2, 'Eclair', 262, 16.0, 24, 6.0),
  createData(3, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(4, 'Gingerbread', 356, 16.0, 49, 3.9)
]

function VacationsContainer() {
  return <VacationComponent arr={rows || []}></VacationComponent>
}

export default VacationsContainer
