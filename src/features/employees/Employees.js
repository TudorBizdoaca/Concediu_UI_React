import React from 'react'
import EmployeesCardsList from 'features/employees/EmployeesGrid'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import employeesStyle from 'features/employees/styles/employeesStyle'

const useStyles = makeStyles(employeesStyle)

function Employees() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div className={classes.page}>
      <div className={classes.pageHeader}>
        <h1 className={classes.title}>Colegii mei</h1>
      </div>
      <EmployeesCardsList />
    </div>
  )
}

export default Employees
