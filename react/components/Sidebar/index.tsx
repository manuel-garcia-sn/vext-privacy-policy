import React, { FunctionComponent } from 'react'

import topics from '../topics'

import SidebarItem from './Item'

const Sidebar: FunctionComponent = () => (
  <nav className="pv8 br b--light-gray">
    <ul className="pl0 list">
      <SidebarItem name="VTEX Privacy Policy" />
      {topics.map(topic => (
        <SidebarItem key={topic.slug} name={topic.name} slug={topic.slug} />
      ))}
    </ul>
  </nav>
)

export default Sidebar
