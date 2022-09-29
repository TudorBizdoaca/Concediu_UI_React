import React, { useEffect, useReducer, useRef, useState } from 'react'
import SearchHeader from './SearchHeader'
import EmployeesCards from 'features/employees/EmployeesCards'
import Pagination from './Pagination'
import { makeStyles } from '@material-ui/core/styles'
import employeesStyle from 'features/employees/styles/employeesStyle'
import dataEmployees from 'features/employees/data/dataEmployees'
// import dataEmployees from './data/dataEmployees'
import loadingGif from '../../assets/img/loading.gif'
import { reducer } from './reducer'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_EMPLOYEES } from './queries'
import useUserData from 'hooks/useUserData'

const useStyles = makeStyles(employeesStyle)

const totalEmployees = 26

const initialState = {
  results: [],
  query: '',
  totalItems: 1,
  startIndex: 0,
  page: 1
}

function Employees() {
  const classes = useStyles()
  const userCacheData = useUserData()

  const [state, dispatch] = useReducer(reducer, initialState)

  const { data, loading } = useQueryWithErrorHandling(GET_EMPLOYEES, {
    variables: { position: state.startIndex, query: encodeURIComponent(state.query) }
  })

  const searchInputRef = useRef('')

  const searchHandler = () => {
    dispatch({
      type: 'query',
      query: searchInputRef.current.value
    })
  }

  const pageChangeHandler = (event, value) => {
    dispatch({ type: 'pagination', page: value })
  }

  useEffect(() => {
    if (data && !loading) {
      dispatch({
        type: 'update',
        results: data?.employeesData.listaAngajati,
        totalItems: data.employeesData.nrAngajati
      })
    }
  }, [data, loading])

  return (
    <div className={classes.page}>
      <SearchHeader searchHandler={searchHandler} searchInputRef={searchInputRef} permissions={userCacheData.esteAdmin} />
      <div className={classes.loadingContainer}>
        <img src={loadingGif} alt='loading' hidden={!loading} />
      </div>
      <EmployeesCards employees={state.results} loading={loading} permissions={userCacheData.esteAdmin} />
      <Pagination state={state} pageChangeHandler={pageChangeHandler} loading={loading} />
    </div>
  )
}

export default Employees
