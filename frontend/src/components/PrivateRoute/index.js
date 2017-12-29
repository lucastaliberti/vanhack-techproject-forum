import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const renderComponentIfLogged = (Component, login) => props =>
  login && login.token ? (
    <Component {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: props.location }
      }}
    />
  )

const PrivateRoute = ({ component: Component, login, ...rest }) => (
  <Route {...rest} render={renderComponentIfLogged(Component, login)} />
)

const mapStateToProps = state => ({ login: state.login })
export default connect(mapStateToProps)(PrivateRoute)
