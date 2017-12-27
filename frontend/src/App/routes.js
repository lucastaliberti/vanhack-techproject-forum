import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Discussion from '../Discussion'

const Routes = props => (
  <Switch>
    <Route path="/discussion" component={Discussion} />
    <Route component={Discussion} />
  </Switch>
)

export default Routes
