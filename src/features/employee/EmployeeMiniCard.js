import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import employeeMiniCardStyle from './styles/employeeMiniCardStyle'

const useStyles = makeStyles(employeeMiniCardStyle)

function EmployeeMiniCard() {
  const classes = useStyles()

  return (
    <div className={classes.card}>
      <img className={classes.avatar} alt='avatar' src='https://i.pinimg.com/originals/40/48/17/404817db5ec123721a0f418096f37929.jpg' />
      <div className={classes.user}>
        <Typography className={classes.firstName}>Prenume</Typography>
        <Typography className={classes.lastName}>Nume</Typography>
      </div>
    </div>
  )
}

export default EmployeeMiniCard
