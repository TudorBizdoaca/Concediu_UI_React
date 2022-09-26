import React from 'react'

import HolidayComponent from 'components/holiday/HolidayComponent'
import { useTranslation } from 'react-i18next'
import { Grid, makeStyles } from '@material-ui/core'
import cardContainer from 'assets/jss/components/cardContainer'
function HolidayHistoryContainer() {
  const { t } = useTranslation()
  const useStyles = makeStyles(cardContainer)
  const classes = useStyles()
  const holidays = [
    {
      Id: 0,
      Perioada: '2022-08-12 - 2022-08-16',
      Inlocuitor: 'Teodorescu Mircea',
      Tip: 'odihna',
      Status: 'Aprobat',
      MotivRespingere: ''
    },
    {
      Id: 1,
      Perioada: '2022-08-02 - 2022-08-06',
      Inlocuitor: 'Teodorescu Mircea',
      Tip: 'medical',
      Status: 'Respins',
      MotivRespingere: 'N-ai voie'
    }
  ]
  return (
    <Grid item container xs={12} className={classes.card}>
      <h1 className={classes.title}>{t('Tooltips.Holidays')}</h1>
      <HolidayComponent holidays={holidays} />
    </Grid>
  )
}

export default HolidayHistoryContainer
