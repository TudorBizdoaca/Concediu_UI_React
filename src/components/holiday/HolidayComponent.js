import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import gridStyle from 'assets/jss/components/HolidayGrid'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

function HolidayComponent(props) {
  const { holidays } = props
  const useStyles = makeStyles(gridStyle)
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Grid container direction='row' className={classes.container}>
      {holidays.map(element => (
        <Grid container item xs={12} justifyContent='flex-start' alignItems='flex-start' className={classes.card} key={element.Id}>
          <Grid item xs={3} className={classes.lblPerioada}>
            {t('IstoricConcedii.Period')}
          </Grid>
          <Grid item xs={3} className={classes.lblInlocuitor}>
            {t('IstoricConcedii.Substitute')}
          </Grid>
          <Grid item xs={3} className={classes.lblTip}>
            {t('IstoricConcedii.Type')}
          </Grid>
          <Grid item xs={3} className={classes.lblStare}>
            {'Status'}
          </Grid>
          <Grid item xs={3} className={classes.perioada}>
            {element.Perioada}
          </Grid>

          <Grid item xs={3} className={classes.inlocuitor}>
            {element.Inlocuitor}
          </Grid>
          <Grid item xs={3} className={classes.tipConcediu}>
            {element.Tip}
          </Grid>
          <Grid item xs={3} className={classes.stare}>
            {element.Status}
          </Grid>
          {element.Status == 'Respins' ? (
            <Grid item className={classes.motivRespingere}>
              {t('IstoricConcedii.ReasonForRejection') + element.MotivRespingere}
            </Grid>
          ) : (
            <Typography></Typography>
          )}
        </Grid>
      ))}
    </Grid>
  )
}
HolidayComponent.propTypes = {
  holidays: PropTypes.array.isRequired
}
export default HolidayComponent
