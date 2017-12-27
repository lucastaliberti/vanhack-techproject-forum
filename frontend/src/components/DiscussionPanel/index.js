import React from 'react'

import { Panel } from 'react-bootstrap'

const DiscussionPanel = ({ title, children }) => (
  <Panel header={<h3>{title}</h3>}>{children}</Panel>
)

export default DiscussionPanel
