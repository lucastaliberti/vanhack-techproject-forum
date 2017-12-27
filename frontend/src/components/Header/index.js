import React from 'react'
import { PageHeader } from 'react-bootstrap'

const Header = ({ name, small }) => (
  <PageHeader>
    {name} <small>{small}</small>
  </PageHeader>
)

export default Header
