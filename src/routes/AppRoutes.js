/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import CustomRoute from '../components/routing/CustomRoute'

import { Forbidden, NotFound } from '@bit/totalsoft_oss.react-mui.kit.core'
import Dashboard from 'features/dashboard/Dashboard'
import VacationsContainer from 'features/vacations/VacationsContainer'
import Employees from 'features/employees/Employees'
import PTORequest from 'features/PTORequest/PTORequest'
import HolidayHistoryContainer from 'features/istoric/HolidayHistoryContainer'
import AddEmployeeContainer from 'features/addEmployee/AddEmployeeContainer'
export default function AppRoutes() {
  return (
    <Switch>
      <CustomRoute isPrivate={false} exact path='/dashboard' component={Dashboard} />
      <Redirect exact from='/' to='/dashboard' />
      <CustomRoute isPrivate={false} exact path='/vacations' component={VacationsContainer} />
      <CustomRoute isPrivate={false} exact path='/employees' component={Employees} />
      <CustomRoute isPrivate={false} exact path='/add-employee' component={AddEmployeeContainer} />
      <CustomRoute isPrivate={false} exact path='/history' component={HolidayHistoryContainer} />
      <CustomRoute isPrivate={false} exact path='/forbidden' component={Forbidden} />
      <CustomRoute isPrivate={false} exact path='/PTORequest' component={PTORequest} />
      <CustomRoute isPrivate={false} render={() => <NotFound title='PageNotFound'></NotFound>} />
    </Switch>
  )
}
