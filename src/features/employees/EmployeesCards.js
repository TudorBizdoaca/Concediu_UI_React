import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import EmployeeCard from 'features/employees/EmployeeCard'
import { makeStyles } from '@material-ui/core/styles'
import employeesCardsStyle from 'features/employees/styles/employeesCardsStyle'

const useStyles = makeStyles(employeesCardsStyle)

function EmployeesCards({ employees, loading, permissions }) {
  const classes = useStyles()

  return (
    <Grid className={classes.cardsGrid} container spacing={4}>
      {employees.map((employee, index) => (
        <Grid item sm={'auto'} key={index}>
          <EmployeeCard employee={employee} loading={loading} permissions={permissions} />
        </Grid>
      ))}
    </Grid>
  )
}

EmployeesCards.propTypes = {
  employees: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  permissions: PropTypes.bool.isRequired
}

export default EmployeesCards
