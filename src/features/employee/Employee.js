import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import employeeStyle from 'features/employee/styles/employeeStyle'
import dataEmployee from 'features/employee/data/dataEmployee'

const useStyles = makeStyles(employeeStyle)

function Employee() {
  const classes = useStyles()

  return <div className={classes.page}>Employee</div>
}

export default Employee
