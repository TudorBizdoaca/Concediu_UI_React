import React, { useEffect, useReducer } from 'react'

import HolidayComponent from 'components/holiday/HolidayComponent'
import { useTranslation } from 'react-i18next'
import { Grid, makeStyles } from '@material-ui/core'
import cardContainer from 'assets/jss/components/cardContainer'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { reducer, initialState } from 'features/istoric/reducer/reducer'
import { GET_HOLIDAY_HISTORY } from './queries'
function HolidayHistoryContainer() {
  const { t } = useTranslation()
  const useStyles = makeStyles(cardContainer)
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data, loading } = useQueryWithErrorHandling(GET_HOLIDAY_HISTORY, { variables: { id: 20 } })

  useEffect(() => {
    if (data && !loading) {
      dispatch({
        type: 'query',
        results: data?.getIstoricConcedii.map(row => {
          return {
            ...row,
            Perioada: row.dataInceput.substring(0, 10) + '=>' + row.dataSfarsit.substring(0, 10)
          }
        })
      })
    }
  }, [data, loading])

  return (
    <Grid item container xs={12} className={classes.card}>
      <h1 className={classes.title}>{t('Tooltips.Holidays')}</h1>
      <HolidayComponent holidays={state.results} />
    </Grid>
  )
}

export default HolidayHistoryContainer
