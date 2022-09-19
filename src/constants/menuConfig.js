import React from 'react'
import { Dashboard, History } from '@material-ui/icons'
import BallotIcon from '@material-ui/icons/Ballot'
import GroupIcon from '@material-ui/icons/Group'

const menuItems = [
  { icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
  { icon: <BallotIcon />, text: 'NavBar.Vacations', path: '/vacations', name: 'Vacations' },
  { icon: <GroupIcon />, text: 'NavBar.Employees', path: '/employees', name: 'Employees' },
  { icon: <History />, text: 'NavBar.HolidayHistory', path: '/history', name: 'HolidayHistory' }
]

export default menuItems
