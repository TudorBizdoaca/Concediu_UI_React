import React from 'react'
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'
import AccountBoxIcon from '@material-ui/icons/AccountBox'

function Employees() {
  var employees = [
    {
      avatar: '',
      lastName: 'Chirita',
      firstName: 'Alberto',
      phone: '0727123456',
      email: 'alberto.chirita@totalsoft.ro'
    },
    {
      avatar: '',
      lastName: 'Bizdoaca',
      firstName: 'Tudor',
      phone: '0737654321',
      email: 'tudor.bizdoaca@totalsoft.ro'
    }
  ]

  // return <IconCard icon={() => <AccountBoxIcon />} iconColor="orange" title={} content={} />
  return 'Hello World!'
}

export default Employees
