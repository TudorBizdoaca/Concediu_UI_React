import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { Pagination as MUIPagination } from '@material-ui/lab'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import paginationStyle from 'features/employees/styles/paginationStyle'

const useStyles = makeStyles(paginationStyle)

function Pagination({ state, pageChangeHandler, loading }) {
  const { t } = useTranslation()
  const classes = useStyles()

  const totalPages = Math.ceil(state.totalItems / 12)
  const displayedRangeStart = state.startIndex + 1
  const displayedRangeEnd = state.startIndex + 12 > state.totalItems ? state.totalItems : state.startIndex + 12
  const displayedRange = displayedRangeStart + '-' + displayedRangeEnd

  return (
    !loading && (
      <Grid className={classes.grid} container spacing={4}>
        <Grid className={classes.pagination} item sm={12}>
          <div className={classes.details}>
            Showing <span>{displayedRange}</span> from <span>{state.totalItems}</span> employees
          </div>
          <MUIPagination
            classes={{ ul: classes.ul }}
            page={state.page}
            count={totalPages}
            onChange={pageChangeHandler}
            variant='outlined'
            shape='rounded'
            size='large'
          />
        </Grid>
      </Grid>
    )
  )
}

Pagination.propTypes = {
  state: PropTypes.object.isRequired,
  pageChangeHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Pagination
