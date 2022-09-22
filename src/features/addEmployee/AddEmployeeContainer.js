import EmployeeForm from 'components/employeeAdd/EmployeeForm'
import React from 'react'

import { useTranslation } from 'react-i18next'
import cardContainer from 'assets/jss/components/cardContainer'
import { Grid, makeStyles } from '@material-ui/core'

function AddEmployeeContainer() {
  const { t } = useTranslation()
  const useStyles = makeStyles(cardContainer)
  const classes = useStyles()
  return (
    <Grid item container className={classes.card} xs={12}>
      <h1 className={classes.title}>{t('Tooltips.AddEmployee')}</h1>
      <EmployeeForm />
    </Grid>
  )
}

export default AddEmployeeContainer
