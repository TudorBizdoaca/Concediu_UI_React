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

import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import { extractDataNastereFromCnp } from 'features/addEmployee/utils/extractDataNastereFromCnp'
import { Autocomplete } from '@bit/totalsoft_oss.react-mui.kit.core'
function EmployeeForm(props) {
  const useStyles = makeStyles(formStyle)
  const classes = useStyles()

  const { t } = useTranslation()
  const history = useHistory()

  const { state, dispatchWrapper, handleSave } = props
  const handleCancel = () => {
    history.push({ pathname: `/employees` })
  }

  return (
    <Grid container direction='row' justifyContent='flex-end' alignItems='center' className={classes.container}>
      <div className={classes.div}>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}> {t('EmployeeForm.Name')}</Typography>
          <TextField
            onChange={event => dispatchWrapper('nume', event.target.value)}
            variant='outlined'
            className={classes.textfield}
          ></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.Surname')}</Typography>
          <TextField
            onChange={event => dispatchWrapper('prenume', event.target.value)}
            variant='outlined'
            className={classes.textfield}
          ></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>EMAIL</Typography>
          <TextField
            onChange={event => dispatchWrapper('email', event.target.value)}
            variant='outlined'
            type={'email'}
            required
            className={classes.textfield}
          ></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.Password')}</Typography>
          <TextField
            onChange={event => dispatchWrapper('parola', event.target.value)}
            variant='outlined'
            type={'password'}
            required
            className={classes.textfield}
          ></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.Cnp')}</Typography>
          <TextField
            onChange={event => dispatchWrapper('cnp', event.target.value)}
            variant='outlined'
            type={'number'}
            required
            className={classes.textfield}
          ></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.PhoneNo')}</Typography>
          <TextField
            onChange={event => dispatchWrapper('phone', event.target.value)}
            variant='outlined'
            type={'number'}
            required
            className={classes.textfield}
          ></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.DataAngajare')}</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.datepicker}
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              value={state.dataAngajarii}
              maxDate={new Date()}
              minDate={state.dataNasterii}
              onChange={event => dispatchWrapper('dataAngajarii', event)}
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
          <Typography className={classes.label}>{t('EmployeeForm.DataNastere')}</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.datepicker}
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              value={state.dataNasterii}
              onChange={event => dispatchWrapper('dataNasterii', event)}
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
          <Typography className={classes.label}>{t('EmployeeForm.IdSeries')}</Typography>
          <TextField
            onChange={event => dispatchWrapper('serie', event.target.value)}
            variant='outlined'
            className={classes.textfield}
          ></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.IdNo')}</Typography>
          <TextField
            onChange={event => dispatchWrapper('nr', event.target.value)}
            variant='outlined'
            type={'number'}
            className={classes.textfield}
          ></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.Manager')}</Typography>
          <Autocomplete
            onChange={event => dispatchWrapper('managerId', event.id)}
            variant='outlined'
            options={state.results}
            filterOptions={(options, state) => options}
            getOptionLabel={option => option.NumeIntreg}
            renderInput={params => <TextField {...params} label='' variant='outlined' />}
            className={classes.textfield}
          ></Autocomplete>
        </Grid>
        <Grid item md={6} xs={12}></Grid>
        <Grid item md={6} xs={12}>
          <Button variant='contained' color='primary' size='small' className={classes.button} onClick={handleCancel} startIcon={<Cancel />}>
            {t('EmployeeForm.Renunta')}
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button onClick={handleSave} variant='contained' color='primary' size='small' className={classes.button} startIcon={<SaveIcon />}>
            {t('EmployeeForm.Salveaza')}
          </Button>
        </Grid>
      </div>
    </Grid>
  )
}

export default EmployeeForm
EmployeeForm.propTypes = {
  dispatchWrapper: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired
}
