import React from 'react'
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import EmployeesGrid from 'features/employees/EmployeesGrid'

function Employees() {
  // var employee = {
  //   avatar: '',
  //   lastName: 'Chirita',
  //   firstName: 'Alberto',
  //   phone: '0727123456',
  //   email: 'alberto.chirita@totalsoft.ro'
  // }
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

  return <IconCard icon={AccountBoxIcon} iconColor='blue' title='Employees' content={<EmployeesGrid />} />
}

export default Employees
