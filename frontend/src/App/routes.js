import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute'

import Login from '../Login'
import Discussion from '../Discussion'

const Routes = props => (
  <Switch>
    <PrivateRoute path="/discussion" component={Discussion} />
    <Route component={Login} />
  </Switch>
)

export default Routes
