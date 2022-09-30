import React, { useEffect, useReducer } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import employeeStyle from 'features/employee/styles/employeeStyle'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Cancel } from '@material-ui/icons'
import { Save } from '@material-ui/icons'
import { Edit } from '@material-ui/icons'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { reducer } from 'features/employee/reducer'
import { GET_EMPLOYEE } from 'features/employee/queries'
import EmployeeInfoTop from 'features/employee/EmployeeInfoTop'
import useUserData from 'hooks/useUserData'
import MyProfileHeader from './MyProfileHeader'

const useStyles = makeStyles(employeeStyle)

const initialState = {
  employee: {},
  isEditing: false
}

function MyProfile() {
  const classes = useStyles()
  const history = useHistory()

  const userCacheData = useUserData()
  const id = parseInt(userCacheData.id)

  const [state, dispatch] = useReducer(reducer, initialState)

  const { data, loading } = useQueryWithErrorHandling(GET_EMPLOYEE, {
    variables: { IdAngajat: id },
    skip: !id
  })

  useEffect(() => {
    if (data && !loading) {
      dispatch({
        type: 'update',
        employee: data?.employeeData
      })
    }
  }, [data, loading])

  const handleClickCancel = () => {
    dispatch({
      type: 'edit',
      isEditing: false
    })
    dispatch({
      type: 'update',
      employee: data?.employeeData
    })
    // location.reload(false)
  }

  const handleClickSave = () => {
    history.push({ pathname: '/employees' })
  }

  const handleClickEdit = () => {
    dispatch({
      type: 'edit',
      isEditing: true
    })
  }

  const handleOnCHangeText = (value, propname) => {
    dispatch({ type: 'onchange', value, propname })
  }

  return (
    <div className={classes.page}>
      <MyProfileHeader />
      <EmployeeInfoTop state={state} handleOnCHangeText={handleOnCHangeText} />
      <Grid container spacing={5} className={classes.contactInfo}>
        <Grid item md={6} xs={12}>
          <div className={classes.contactInput}>
            <Typography className={classes.contactText}>CNP</Typography>
            <TextField
              variant='outlined'
              value={state.employee.cnp}
              onChange={event => handleOnCHangeText(event.target.value, 'cnp')}
              InputProps={{
                className: `${classes.textField} ${!state.isEditing ? classes.readOnly : ''}`,
                readOnly: !state.isEditing
              }}
            ></TextField>
          </div>
        </Grid>
        <Grid item md={3} xs={12}>
          <div className={classes.contactInput}>
            <Typography className={classes.contactText}>Serie</Typography>
            <TextField
              variant='outlined'
              value={state.employee.serie}
              onChange={event => handleOnCHangeText(event.target.value, 'serie')}
              InputProps={{
                className: `${classes.textField} ${!state.isEditing ? classes.readOnly : ''}`,
                readOnly: !state.isEditing
              }}
            ></TextField>
          </div>
        </Grid>
        <Grid item md={3} xs={12}>
          <div className={classes.contactInput}>
            <Typography className={classes.contactText}>Nr</Typography>
            <TextField
              variant='outlined'
              value={state.employee.no}
              onChange={event => handleOnCHangeText(event.target.value, 'no')}
              InputProps={{
                className: `${classes.textField} ${!state.isEditing ? classes.readOnly : ''}`,
                readOnly: !state.isEditing
              }}
            ></TextField>
          </div>
        </Grid>
        <Grid item md={8} xs={12}>
          <div className={classes.contactInput}>
            <Typography className={classes.contactText}>Data Angajare</Typography>
            <TextField
              variant='outlined'
              value={state?.employee?.dataAngajare?.substring(0, 10)}
              type='date'
              onChange={event => handleOnCHangeText(event.target.value, 'dataAngajare')}
              InputProps={{
                className: `${classes.textField} ${!state.isEditing ? classes.readOnly : ''}`,
                readOnly: !state.isEditing
              }}
            ></TextField>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div className={classes.contactInput}>
            <Typography className={classes.contactText}>Zile Concediu</Typography>
            <TextField
              variant='outlined'
              value={state.employee.zileConcediu}
              onChange={event => handleOnCHangeText(event.target.value, 'zileConcediu')}
              InputProps={{
                className: `${classes.textField} ${!state.isEditing ? classes.readOnly : ''}`,
                readOnly: !state.isEditing
              }}
            ></TextField>
          </div>
        </Grid>
      </Grid>
      {state.isEditing && (
        <Grid container spacing={5} justifyContent='center'>
          <Grid item md={6} xs={12}>
            <Button className={classes.button} variant='contained' size='large' startIcon={<Cancel />} onClick={handleClickCancel}>
              Cancel
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Button className={classes.button} variant='contained' size='large' startIcon={<Save />} onClick={handleClickSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      )}
      {!state.isEditing && (
        <Grid container spacing={5} justifyContent='center'>
          <Grid item xs={12}>
            <Button className={classes.button} variant='contained' size='large' startIcon={<Edit />} onClick={handleClickEdit}>
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default MyProfile
