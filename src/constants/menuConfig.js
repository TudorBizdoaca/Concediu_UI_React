import React from 'react'
import { Dashboard, LocalAirport } from '@material-ui/icons'
import GroupIcon from '@material-ui/icons/Group'

const menuItems = [
  { icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
  { icon: <GroupIcon />, text: 'NavBar.Employees', path: '/employees', name: 'Employees' },
  { icon: <LocalAirport />, text: 'NavBar.PTORequest', path: '/PTORequest', name: 'PTORequest' }
]

export default menuItems
