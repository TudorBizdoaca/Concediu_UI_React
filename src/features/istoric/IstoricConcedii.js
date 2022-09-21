import React from 'react'
import ListIcon from '@material-ui/icons/List'
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'
import HolidayGrid from 'components/holiday/HolidayGrid'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import holidayIcon from 'assets/jss/components/holidayIconCard'
function IstoricConcedii() {
  const { t } = useTranslation()
  const useStyles = makeStyles(holidayIcon)
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
  console.log('TIP::::' + typeof HolidayGrid)
  console.log(holidays)
  return (
    <IconCard
      customCardClass={classes.card}
      icon={ListIcon}
      iconColor={'purple'}
      title={t('Tooltips.Holidays')}
      content={<HolidayGrid holidays={holidays} />}
    />
  )
}

export default IstoricConcedii
