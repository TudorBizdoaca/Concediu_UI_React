import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import employeeStyle from 'features/employee/styles/employeeStyle'
import { useHistory } from 'react-router-dom'
import EmployeeHeader from './EmployeeHeader'
import EmployeeMiniCard from './EmployeeMiniCard'
import { Grid, TextField, Typography } from '@material-ui/core'
import iconPhone from 'assets/img/iconPhone.svg'
import iconEmail from 'assets/img/iconEmail.svg'

const useStyles = makeStyles(employeeStyle)

function Employee() {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    history.push({ pathname: '/employees' })
  }

  return (
    <div className={classes.page}>
      <EmployeeHeader handleClick={handleClick} />
      <Grid container spacing={4} direction='row' justifyContent='flex-end' alignItems='center' className={classes.contactInfo}>
        <Grid item md={4} xs={12}>
          <EmployeeMiniCard />
        </Grid>
        <Grid item md={4} xs={12}>
          <div className={classes.contactItem}>
            <img className={classes.contactIcon} alt='iconPhone' src={iconEmail} />
            <div>
              <Typography className={classes.label}>Email</Typography>
              <TextField variant='outlined' className={classes.textfield}></TextField>
            </div>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div className={classes.contactItem}>
            <img className={classes.contactIcon} alt='iconPhone' src={iconPhone} />
            <span className={classes.contactText}>0727123456</span>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Employee
