import React from 'react'
import { Grid } from '@material-ui/core'
import EmployeeCard from 'features/employees/EmployeeCard'
import { makeStyles } from '@material-ui/core/styles'
import { findLastIndex } from 'ramda'

function createData(id, avatar, lastName, firstName, email, phone, identifierNumber, birthDate, hireDate, vacationDays) {
  return { id, avatar, lastName, firstName, email, phone, identifierNumber, birthDate, hireDate, vacationDays }
}

const employees = [
  createData(
    0,
    'https://avatars.githubusercontent.com/u/78529545',
    'Chirita',
    'Alberto',
    'alberto.chirita@totalsoft.ro',
    '0727123456',
    1951115123456,
    '15-11-1995',
    '22-08-2022',
    21
  ),
  createData(
    1,
    'https://avatars.githubusercontent.com/u/78529545',
    'Chirita',
    'Alberto',
    'alberto.chirita@totalsoft.ro',
    '0727123456',
    1951115123456,
    '15-11-1995',
    '22-08-2022',
    21
  ),
  createData(
    2,
    'https://avatars.githubusercontent.com/u/78529545',
    'Chirita',
    'Alberto',
    'alberto.chirita@totalsoft.ro',
    '0727123456',
    1951115123456,
    '15-11-1995',
    '22-08-2022',
    21
  ),
  createData(
    3,
    'https://avatars.githubusercontent.com/u/78529545',
    'Chirita',
    'Alberto',
    'alberto.chirita@totalsoft.ro',
    '0727123456',
    1951115123456,
    '15-11-1995',
    '22-08-2022',
    21
  ),
  createData(
    4,
    'https://avatars.githubusercontent.com/u/78529545',
    'Chirita',
    'Alberto',
    'alberto.chirita@totalsoft.ro',
    '0727123456',
    1951115123456,
    '15-11-1995',
    '22-08-2022',
    21
  )
]

const useStyles = makeStyles({
  cardsList: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#f9f9f9',
    padding: '24px'
  }
})

function EmployeesCardsList() {
  const classes = useStyles()

  return (
    <div className={classes.cardsList}>
      <Grid container spacing={4}>
        {employees.map((employee, index) => (
          <Grid item sm={12} md={6} lg={4} xl={3} key={index}>
            <EmployeeCard />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default EmployeesCardsList
