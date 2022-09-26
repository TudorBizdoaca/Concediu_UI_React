import React, { Fragment, useState, useReducer, useEffect } from 'react'
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
import { reducer, initialState } from './PTORequestReducer'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { USER_DATA_QUERY } from './queries'
import { useMutation } from '@apollo/client'

const useStyles = makeStyles(PTORequestStyle)
function PTORequest() {
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)

  const { data, loading } = useQueryWithErrorHandling(USER_DATA_QUERY)


  const dispatchWrapper = (onChangeParam, stateField) => {
    dispatch({ onChangeParam, stateField, type: 'changeHandler' })
  }
  return <PTORequestComponent dispatchWrapper={dispatchWrapper} state={state}></PTORequestComponent>
}

export default PTORequest
