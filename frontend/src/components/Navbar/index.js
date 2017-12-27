import React from 'react'
import { Navbar } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

const NavbarComponent = props => (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#/">
          <FontAwesome name="comments" /> Vanhack Tech Project Forum
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
)

export default NavbarComponent
