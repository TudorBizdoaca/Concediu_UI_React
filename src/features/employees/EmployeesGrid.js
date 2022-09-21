import React, { useReducer } from 'react'
import { Grid } from '@material-ui/core'
import EmployeeCard from 'features/employees/EmployeeCard'
import Pagination from '@material-ui/lab/Pagination'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import employeesGridStyle from 'features/employees/styles/employeesGridStyle'
import dataEmployees from 'features/employees/data/dataEmployees'

const useStyles = makeStyles(employeesGridStyle)

const employees = dataEmployees

const initialState = {
  results: [],
  query: '',
  totalItems: 26,
  startIndex: 0,
  page: 1
}

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return {}
    case 'query':
      return {}
    case 'pagination':
      return {
        ...state,
        page: action.page,
        startIndex: (action.page - 1) * 20
      }
    default:
      throw new Error()
  }
}

function EmployeesCardsList() {
  const { t } = useTranslation()
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)

  var displayedItems = 9
  var totalPages = Math.ceil(state.totalItems / displayedItems)
  var startIndex = (state.page - 1) * displayedItems
  var displayedRange = startIndex + 1 + '-' + (startIndex + 9)

  const handleChange = (event, value) => {
    dispatch({ type: 'pagination', page: value })
  }

  return (
    <Grid className={classes.cardsGrid} container spacing={4}>
      {employees.map((employee, index) => (
        <Grid item sm={'auto'} key={index}>
          <EmployeeCard employee={employee} />
        </Grid>
      ))}
      <Grid className={classes.pagination} item sm={12}>
        <div className={classes.details}>
          Showing <span>{displayedRange}</span> from <span>{state.totalItems}</span> employees
        </div>
        <Pagination
          classes={{ ul: classes.ul }}
          page={state.page}
          count={totalPages}
          onChange={handleChange}
          variant='outlined'
          shape='rounded'
        />
      </Grid>
    </Grid>
  )
}

export default EmployeesCardsList
