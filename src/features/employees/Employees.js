import React, { useEffect, useReducer, useRef, useState } from 'react'
import SearchHeader from './SearchHeader'
import EmployeesCards from 'features/employees/EmployeesCards'
import Pagination from './Pagination'
import { makeStyles } from '@material-ui/core/styles'
import employeesStyle from 'features/employees/styles/employeesStyle'
import dataEmployees from 'features/employees/data/dataEmployees'
import { reducer } from './reducer'

const useStyles = makeStyles(employeesStyle)

const employees = dataEmployees
const totalEmployees = 26

// move to reducer
const initialState = {
  results: employees,
  query: '',
  totalItems: totalEmployees,
  startIndex: 0,
  page: 1
}

function Employees() {
  const classes = useStyles()

  const [init, setInit] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialState)

  const searchInputRef = useRef('')

  const searchHandler = () => {
    setInit(false)
    // sendGetRequest(searchInputRef.current.value)
    dispatch({
      type: 'query',
      query: searchInputRef.current.value
    })
  }

  const pageChangeHandler = (event, value) => {
    dispatch({ type: 'pagination', page: value })
  }

  useEffect(() => {
    if (state.query && !init) {
      // sendGetRequest(state.query, state.startIndex)
    }
  }, [state.query, state.startIndex, /*sendGetRequest,*/ init])

  useEffect(() => {
    if (employees && totalEmployees && !init) {
      dispatch({
        type: 'update',
        results: employees,
        totalItems: totalEmployees
      })
    }
  }, [employees, totalEmployees, init])

  return (
    <div className={classes.page}>
      <SearchHeader searchHandler={searchHandler} searchInputRef={searchInputRef} />
      <EmployeesCards employees={state.results} />
      <Pagination state={state} pageChangeHandler={pageChangeHandler} />
    </div>
  )
}

export default Employees
