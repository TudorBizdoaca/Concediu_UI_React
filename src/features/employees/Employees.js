import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'
import GroupIcon from '@material-ui/icons/Group'
import { useTranslation } from 'react-i18next'
import EmployeesGrid from 'features/employees/EmployeesGrid'
import EmployeesCardsList from 'features/employees/EmployeesCardsList'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  filters: {
    margin: '25px 0 25px 0'
  }
})

function Employees() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <IconCard
      icon={GroupIcon}
      iconColor='blue'
      title={t('NavBar.Employees')}
      content={
        <div>
          <div className={classes.filters}>
            <TextField label={'Name'}></TextField>
            <Button variant='contained' color='primary' size='medium'>
              {'Search'}
            </Button>
          </div>
          <EmployeesGrid />
          <EmployeesCardsList />
        </div>
      }
    />
  )
}

export default Employees
