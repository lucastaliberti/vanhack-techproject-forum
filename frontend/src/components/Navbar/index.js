import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap'

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
