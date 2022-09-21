import EmployeeForm from 'components/employeeAdd/EmployeeForm'
import React from 'react'
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'
import People from '@material-ui/icons/People'
import { useTranslation } from 'react-i18next'
import holidayIcon from 'assets/jss/components/holidayIconCard'
import { makeStyles } from '@material-ui/core'
import classNames from 'classnames'
function AddEmployeeContainer() {
  const { t } = useTranslation()
  const useStyles = makeStyles(holidayIcon)
  const classes = useStyles()
  return (
    <IconCard
      customCardClass={classes.card}
      iconColor='purple'
      icon={People}
      title={t('Tooltips.AddEmployee')}
      content={<EmployeeForm />}
    />
  )
}

export default AddEmployeeContainer
