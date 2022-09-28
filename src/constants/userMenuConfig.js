import React from 'react'
import Person from '@material-ui/icons/Person'
import ExitToApp from '@material-ui/icons/ExitToApp'

const userMenuItems = [
  { icon: <Person />, text: 'MyProfile', path: '/myProfile', name: 'MyProfile' },
  { icon: <ExitToApp />, text: 'Logout', path: '/logout', name: 'Logout' }
]

export default userMenuItems
