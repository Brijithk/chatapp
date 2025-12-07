import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { obj } from '../../data/constant'

import Navbar from '../../components/Navbar';
const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Bootstrap 32</h1>
      <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" href="#">Overview</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Settings</a>
  </li>
</ul>

    </div>
  )
}

export default Home