import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

function Dashboard() {
  const addToast = useToast()
  addToast('Welcome', 'success')
  return (
    <Fragment>
      <Typography>This is my dashboard...</Typography>
      <Grid>Internships are amazing.</Grid>
    </Fragment>
  )
}

export default Dashboard
