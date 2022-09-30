import React from 'react'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import employeeHeaderStyle from 'features/employee/styles/employeeHeaderStyle'

const useStyles = makeStyles(employeeHeaderStyle)

function MyProfileHeader({ handleClick }) {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Datele Mele</h1>
    </div>
  )
}

MyProfileHeader.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default MyProfileHeader
