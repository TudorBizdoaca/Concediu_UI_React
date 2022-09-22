import React, { useReducer } from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import formStyle from './styles/formStyle'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Cancel from '@material-ui/icons/Cancel'
import { reducer, initialState } from './reducer/reducer'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
function EmployeeForm() {
  const useStyles = makeStyles(formStyle)
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)
  const { t } = useTranslation()
  const history = useHistory()

  const handleClick = () => {
    history.push({ pathname: `/employees` })
  }
  return (
    <Grid container direction='row' justifyContent='flex-end' alignItems='center' className={classes.container}>
      <div className={classes.div}>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}> {t('EmployeeForm.Name')}</Typography>
          <TextField variant='outlined' className={classes.textfield}></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.Surname')}</Typography>
          <TextField variant='outlined' className={classes.textfield}></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.Cnp')}</Typography>
          <TextField variant='outlined' type={'number'} className={classes.textfield}></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.DataAngajare')}</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.datepicker}
              disableToolbar
              variant='inline'
              format='dd/MM/yyyy'
              margin='normal'
              value={state.dataAngajarii}
              onChange={e => {
                console.log(state.dataAngajarii)
                dispatch({ type: 'DateChange', e })
              }}
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
          <TextField variant='outlined' className={classes.textfield}></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>{t('EmployeeForm.IdNo')}</Typography>
          <TextField variant='outlined' type={'number'} className={classes.textfield}></TextField>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button variant='contained' color='primary' size='small' className={classes.button} onClick={handleClick} startIcon={<Cancel />}>
            {t('EmployeeForm.Renunta')}
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button
            onClick={handleClick}
            variant='contained'
            color='primary'
            size='small'
            className={classes.button}
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
