import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute'

import RegisterForm from '../Login/RegisterForm'
import LoginForm from '../Login/LoginForm'
import Discussion from '../Discussion'

const Routes = props => (
  <Switch>
    <PrivateRoute path="/discussion" component={Discussion} />
    <Route path="/register" component={RegisterForm} />
    <Route component={LoginForm} />
  </Switch>
)

export default Routes
