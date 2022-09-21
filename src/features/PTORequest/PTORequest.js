import React, { Fragment, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { Container, Grid, Icon, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import PTORequestStyle from './PTORequestCSS'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
import Save from '@material-ui/icons/Save'
import { FiberNewSharp } from '@material-ui/icons'
import { differenceInBusinessDays } from 'date-fns'
import PTORequestComponent from './PTORequestComponent'
const useStyles = makeStyles(PTORequestStyle)
function PTORequest() {
  const classes = useStyles()
  return (
    <Container className={classes.MainContainer}>
      <PTORequestComponent></PTORequestComponent>
    </Container>
  )
}

export default PTORequest
