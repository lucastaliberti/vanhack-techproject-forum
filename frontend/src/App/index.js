import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import logo from './logo.svg'
import './index.css'

import Header from '../components/Header'
import Navbar from '../components/Navbar'

import Routes from './routes'

const gridMargin = {
  marginTop: '65px'
}

const App = () => (
  <div>
    <Navbar />
    <Grid style={gridMargin}>
      <Routes />
    </Grid>
  </div>
)
const AppRouted = props => (
  <Router>
    <App {...props} />
  </Router>
)

export default AppRouted
