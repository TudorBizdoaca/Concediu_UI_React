import React from 'react'
import iconPhone from 'assets/img/iconPhone.svg'
import iconEmail from 'assets/img/iconEmail.svg'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import employeeCardStyle from 'features/employees/styles/employeeCardStyle'

const useStyles = makeStyles(employeeCardStyle)

function EmployeeCard({ employee }) {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Paper className={classes.card}>
      <CardMedia className={classes.image} component='img' alt='User' height='140' image={employee.avatar} title='User' />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.name} gutterBottom variant='h5' component='h2'>
          {employee.lastName} {employee.firstName}
        </Typography>
        <Typography className={classes.job} component='p'>
          {employee.job}
        </Typography>
        <div className={classes.contact}>
          <div className={classes.contactItem}>
            <img className={classes.contactIcon} alt='iconPhone' src={iconPhone} />
            <span className={classes.contactText}>{employee.phone}</span>
          </div>
          <div>
            <img className={classes.contactIcon} alt='iconPhone' src={iconEmail} />
            <span className={classes.contactText}>{employee.email}</span>
          </div>
        </div>
      </CardContent>
    </Paper>
  )
}

EmployeeCard.propTypes = {
  employee: PropTypes.object
}

export default EmployeeCard
