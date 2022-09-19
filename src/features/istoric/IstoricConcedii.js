import React, { Fragment } from 'react'
import ListIcon from '@material-ui/icons/List'
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'
import HolidayGrid from 'components/holiday/HolidayGrid'

function IstoricConcedii() {
  const holidays = [
    {
      Id:0,
      Perioada: '2022-08-12 - 2022-08-16',
      Inlocuitor: 'Teodorescu Mircea',
      Tip: 'odihna',
      Status: 'Aprobat'
    },
    {
      Id:1,
      Perioada: '2022-08-02 - 2022-08-06',
      Inlocuitor: 'Teodorescu Mircea',
      Tip: 'medical',
      Status: 'Aprobat'
    }
  ]
  console.log("TIP::::" + typeof(HolidayGrid))
  console.log(holidays)
  return (<IconCard icon={ListIcon} iconColor={'purple'} title={'Concedii'} content={<HolidayGrid holidays={holidays}/>} />)
}

export default IstoricConcedii
