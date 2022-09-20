/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import CustomRoute from '../components/routing/CustomRoute'

import { Forbidden, NotFound } from '@bit/totalsoft_oss.react-mui.kit.core'
import Dashboard from 'features/dashboard/Dashboard'
import VacationsContainer from 'features/vacations/VacationsContainer'
import Employees from 'features/employees/Employees'
import IstoricConcedii from 'features/istoric/IstoricConcedii'
export default function AppRoutes() {
  return (
    <Switch>
      <CustomRoute isPrivate={false} exact path='/dashboard' component={Dashboard} />
      <Redirect exact from='/' to='/dashboard' />
      <CustomRoute isPrivate={false} exact path='/vacations' component={VacationsContainer} />
      <CustomRoute isPrivate={false} exact path='/employees' component={Employees} />
      <CustomRoute isPrivate={false} exact path='/history' component={IstoricConcedii} />
      <CustomRoute isPrivate={false} exact path='/forbidden' component={Forbidden} />

      <CustomRoute isPrivate={false} render={() => <NotFound title='PageNotFound'></NotFound>} />
    </Switch>
  )
}
