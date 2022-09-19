import React from 'react'
import { Dashboard, History } from '@material-ui/icons'
import GroupIcon from '@material-ui/icons/Group'


const menuItems = [
  { icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
  { icon: <GroupIcon />, text: 'NavBar.Employees', path: '/employees', name: 'Employees' }
,
{ icon: <History  />, text: 'NavBar.HolidayHistory', path: '/history', name: 'HolidayHistory' }
]

export default menuItems
