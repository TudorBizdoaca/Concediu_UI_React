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
import PTORequest from './PTORequest'
import PropTypes from 'prop-types'

const useStyles = makeStyles(PTORequestStyle)
const tipuriConcediu = [
  { title: 'Medical', id: 0 },
  { title: 'Odihna', id: 1 },
  { title: 'Special', id: 2 }
]
const Inlocuitori = [
  { title: 'Marinescu Marian', id: 0 },
  { title: 'Popescu Pops', id: 1 },
  { title: 'Ionescu Ion', id: 2 }
]

function PTORequestComponent(props) {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const classes = useStyles()

  return (
    <>
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
              value={props.state.dataInceput}
              onChange={e => props.dispatchWrapper(e, 'dataInceput')}
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
              value={props.state.dataFinal}
              onChange={e => props.dispatchWrapper(e, 'dataFinal')}
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
            value={props.state.totalZileSolicitate}
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
            onChange={(e, value) => props.dispatchWrapper(value.id, 'idTipConcediu')}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            id='combo-box-demo'
            options={Inlocuitori}
            getOptionLabel={option => option.title}
            style={{ width: 275 }}
            renderInput={params => <TextField {...params} label='' variant='outlined' />}
            onChange={(e, value) => props.dispatchWrapper(value.id, 'idInlocuitor')}
          />
        </Grid>
      </Grid>
      <p className={classes.TypographyDataInceput} style={{ marginTop: '20px' }}>
        COMENTARII
      </p>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id='outlined-multiline'
            fullWidth
            multiline
            rows={4}
            defaultValue=''
            variant='outlined'
            onChange={e => props.dispatchWrapper(e.target.value, 'comentarii')}
          />
        </Grid>
      </Grid>

      <Button variant='contained' className={classes.ButonSalveaza} style={{ marginTop: '50px' }}>
        <p style={{ alignSelf: 'end', color: 'white', fontFamily: 'Cairo', fontWeight: 700 }}>SALVEAZA</p>
        <Save style={{ alignSelf: 'start' }}></Save>
      </Button>
    </>
  )
}
PTORequestComponent.propTypes = {
  dispatchWrapper: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}

export default PTORequestComponent
