import React, { Fragment, useState, useReducer } from 'react'
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
import { reducer, initialState } from './PTORequestReducer'

const useStyles = makeStyles(PTORequestStyle)

function PTORequestComponent() {
  const classes = useStyles()
  const tipuriConcediu = [{ title: 'Medical' }, { title: 'Odihna' }, { title: 'Special' }]
  const Inlocuitori = [{ title: 'Marinescu Marian' }, { title: 'Popescu Pops' }, { title: 'Ionescu Ion' }]

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Container>
      {/* DataInceput: {state.DataInceput} */}
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
              value={state.dataInceput}
              onChange={e => {
                dispatch({ type: 'datePicker1', e })
              }}
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
              value={state.dataFinal}
              onChange={e => {
                dispatch({ type: 'datePicker2', e })
              }}
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
      <Grid container className={classes.ClasaSpatiu}>
        <Grid item xs={6}>
          <TextField
            value={state.totalZileSolicitate}
            id='standard-read-only-input'
            InputProps={{
              readOnly: true
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='standard-read-only-input'
            defaultValue='21'
            InputProps={{
              readOnly: true
            }}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.ClasaSpatiu}>
        <Grid item xs={6}>
          <p className={classes.TypographyDataInceput}> TIP CONCEDIU </p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.TypographyDataInceput}> INLOCUITOR </p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Autocomplete
            id='combo-box-demo'
            options={tipuriConcediu}
            getOptionLabel={option => option.title}
            style={{ width: 275 }}
            renderInput={params => <TextField {...params} label='' variant='outlined' />}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            id='combo-box-demo'
            options={Inlocuitori}
            getOptionLabel={option => option.title}
            style={{ width: 275 }}
            renderInput={params => <TextField {...params} label='' variant='outlined' />}
          />
        </Grid>
      </Grid>
      <p className={classes.TypographyDataInceput} style={{ marginTop: '20px' }}>
        COMENTARII
      </p>
      <TextField id='outlined-multiline-static' multiline rows={4} defaultValue='' variant='outlined' />
      <Button variant='contained' className={classes.ButonSalveaza} style={{ alignSelf: 'center ', margin: '50px' }}>
        <p style={{ alignSelf: 'end', color: 'white', fontFamily: 'Cairo', fontWeight: 700 }}>SALVEAZA</p>
        <Save style={{ alignSelf: 'start' }}></Save>
      </Button>
    </Container>
  )
}

export default PTORequestComponent
