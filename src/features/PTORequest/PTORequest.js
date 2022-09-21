import React, { Fragment, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import PTORequestStyle from './PTORequestCSS'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

const useStyles = makeStyles(PTORequestStyle)
function PTORequest() {
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'))

  const handleDateChange = date => {
    setSelectedDate(date)
  }
  const classes = useStyles()
  return (
    <Container className={classes.MainContainer}>
      <p className={classes.TypographyCerereConcediu}>Adauga concediu</p>
      <Grid container>
        <Grid item xs={6}>
          <p className={classes.TypographyDataInceput}> DATA INCEPUT </p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.TypographyDataInceput}> DATA FINAL </p>
        </Grid>
      </Grid>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container>
          <Grid item xs={6}>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              margin='normal'
              id='date-picker-inline'
              label='Date picker inline'
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              margin='normal'
              id='date-picker-inline'
              label='Date picker inline'
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      <Grid container className={classes.ClasaSpatiu}>
        <Grid item xs={6}>
          <p className={classes.TypographyDataInceput}> TOTAL ZILE LIBERE SOLICITATE </p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.TypographyDataInceput}> ZILE LIBERE DISPONIBILE </p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PTORequest
