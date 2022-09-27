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
import { TIPURI_CONCEDIU_QUERY, USER_DATA_QUERY } from './queries'
import { useMutation } from '@apollo/client'
import { gql, useQuery } from '@apollo/client'

const useStyles = makeStyles(PTORequestStyle)
function PTORequest() {
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data, loading } = useQuery(TIPURI_CONCEDIU_QUERY, { variables: { zileConcediuId2: 7 } })
  const tipuriConcediu = !loading ? data : {}
  // const { data2, loading2 } = useQueryWithErrorHandling(USER_DATA_QUERY)
  //1. functie wrapper care sa apeleze useQuery pentru Mutation
  // functie care sa apeleze toate Query-urile de get, si sa trimita ca prop informatiile la componenta
  //2. transmite functia ca prop la PTORequestComponent
  const dispatchWrapper = (onChangeParam, stateField) => {
    dispatch({ onChangeParam, stateField, type: 'changeHandler' })
  }
  return <PTORequestComponent dispatchWrapper={dispatchWrapper} state={state}></PTORequestComponent>
}

export default PTORequest
