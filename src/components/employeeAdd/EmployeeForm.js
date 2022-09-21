import React from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import formStyle from './styles/formStyle'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Cancel from '@material-ui/icons/Cancel'

function EmployeeForm() {
  const useStyles = makeStyles(formStyle)

  const classes = useStyles()
  return (
    <Grid container direction='row' justifyContent='flex-end' alignItems='center' className={classes.container}>
      <div className={classes.div}>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>NUME</Typography>
          <TextField variant='outlined' className={classes.TNume}></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>PRENUME</Typography>
          <TextField variant='outlined' className={classes.TNume}></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>COD NUMERIC PERSONAL</Typography>
          <TextField variant='outlined' className={classes.TNume}></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>DATA ANGAJARII</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.datepicker}
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              value={new Date('2014-08-18T21:11:54')}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              InputProps={{
                disableUnderline: true
              }}
              classes={{
                root: classes.datepicker
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>SERIE BULETIN</Typography>
          <TextField variant='outlined' className={classes.TNume}></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>NR BULETIN</Typography>
          <TextField variant='outlined' className={classes.TNume}></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button variant='contained' color='primary' size='small' className={classes.button} startIcon={<Cancel />}>
            Renunta
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button variant='contained' color='primary' size='small' className={classes.button} startIcon={<SaveIcon />}>
            Salveaza
          </Button>
        </Grid>
      </div>
    </Grid>
  )
}

export default EmployeeForm
