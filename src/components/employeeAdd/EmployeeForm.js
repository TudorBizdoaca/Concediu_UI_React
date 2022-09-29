import React from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Cancel from '@material-ui/icons/Cancel'
import useUserData from 'hooks/useUserData'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import { Autocomplete } from '@bit/totalsoft_oss.react-mui.kit.core'

function EmployeeForm(props) {
  const { t } = useTranslation()
  const history = useHistory()
  const userCacheData = useUserData()
  const { state, dispatchWrapper, handleSave, classesForm } = props
  const handleCancel = () => {
    history.push({ pathname: `/employees` })
  }

  return (
    <Grid container direction='row' justifyContent='flex-end' alignItems='center' className={classesForm.container}>
      <div className={classesForm.div}>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}> {t('EmployeeForm.Name')}</Typography>
          <TextField
            onChange={event => {
              dispatchWrapper('nume', event.target.value)
            }}
            variant='outlined'
            required
            className={classesForm.textfield}
          ></TextField>
          <p className={classesForm.errorP}>{state.isValidNume === false ? state.numeErr : ''}</p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>{t('EmployeeForm.Surname')}</Typography>
          <TextField
            onChange={event => {
              dispatchWrapper('prenume', event.target.value)
            }}
            variant='outlined'
            required
            className={classesForm.textfield}
          ></TextField>
          <p className={classesForm.errorP}>{state.isValidPrenume === false ? state.prenumeErr : ''}</p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>EMAIL</Typography>
          <TextField
            onChange={event => {
              dispatchWrapper('email', event.target.value)
            }}
            variant='outlined'
            type={'email'}
            required
            className={classesForm.textfield}
          ></TextField>
          <p className={classesForm.errorP}>{state.isValidEmail === false ? state.emailErr : ''}</p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>{t('EmployeeForm.Password')}</Typography>
          <TextField
            onChange={event => {
              dispatchWrapper('parola', event.target.value)
            }}
            variant='outlined'
            type={'password'}
            required
            className={classesForm.textfield}
          ></TextField>
          <p className={classesForm.errorP}>{state.isValidPass === false ? state.passErr : ''}</p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>{t('EmployeeForm.Cnp')}</Typography>
          <TextField
            autoFocus={false}
            onChange={event => {
              dispatchWrapper('cnp', event.target.value)
            }}
            variant='outlined'
            type={'number'}
            required
            className={classesForm.textfield}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 13)
            }}
          ></TextField>
          <p className={classesForm.errorP}>{state.isValidCnp === false ? state.cnpErr : ''}</p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>{t('EmployeeForm.PhoneNo')}</Typography>
          <TextField
            onChange={event => dispatchWrapper('phone', event.target.value)}
            variant='outlined'
            type={'number'}
            required
            className={classesForm.textfield}
          ></TextField>
          <p className={classesForm.errorP}>{state.isValidPhoneNo === false ? state.phoneNoErr : ''}</p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>{t('EmployeeForm.DataAngajare')}</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classesForm.datepicker}
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
                root: classesForm.datepicker
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>{t('EmployeeForm.DataNastere')}</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classesForm.datepicker}
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              value={state.dataNasterii}
              disabled
              onChange={event => dispatchWrapper('dataNasterii', event)}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              InputProps={{
                disableUnderline: true
              }}
              classes={{
                root: classesForm.datepicker
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>{t('EmployeeForm.IdSeries')}</Typography>
          <TextField
            onChange={event => {
              dispatchWrapper('serie', event.target.value)
            }}
            variant='outlined'
            className={classesForm.textfield}
            inputProps={{ maxLength: 2 }}
          ></TextField>
          <p className={classesForm.errorP}>{state.isValidSerie === false ? state.serieErr : ''}</p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>{t('EmployeeForm.IdNo')}</Typography>
          <TextField
            onChange={event => {
              dispatchWrapper('nr', event.target.value)
            }}
            variant='outlined'
            type={'number'}
            className={classesForm.textfield}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)
            }}
          ></TextField>
          <p className={classesForm.errorP}>{state.isValidNr === false ? state.nrErr : ''}</p>
        </Grid>
        {userCacheData.esteAdmin ? (
          <Grid item md={6} xs={12}>
            <Typography className={classesForm.label}>{t('EmployeeForm.Manager')}</Typography>
            <Autocomplete
              onChange={event => dispatchWrapper('managerId', event.id)}
              variant='outlined'
              options={state.results}
              filterOptions={options => options}
              getOptionLabel={option => option.NumeIntreg}
              renderInput={params => <TextField {...params} label='' variant='outlined' />}
              className={classesForm.textfield}
            ></Autocomplete>
          </Grid>
        ) : (
          <Grid item md={6} xs={12}></Grid>
        )}

        <Grid item md={6} xs={12}></Grid>

        <Grid item md={6} xs={12}>
          <Button
            variant='contained'
            color='primary'
            size='small'
            className={classesForm.button}
            onClick={handleCancel}
            startIcon={<Cancel />}
          >
            {t('EmployeeForm.Renunta')}
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button
            onClick={handleSave}
            variant='contained'
            color='primary'
            size='small'
            className={classesForm.button}
            startIcon={<SaveIcon />}
          >
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
  handleSave: PropTypes.func.isRequired,
  classesForm: PropTypes.object
}
