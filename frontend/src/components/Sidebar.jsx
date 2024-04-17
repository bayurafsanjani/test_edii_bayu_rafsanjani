import React from 'react'
import {NavLink} from "react-router-dom"

function Sidebar() {
  return (
    <div>
      <aside className="menu has-shadow">
  <p className="menu-label">General</p>
  <ul className="menu-list">
    <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
    </li>
    <li>
        <NavLink to={"/datas"}>Biodata</NavLink>
    </li>
  </ul>
  <p className="menu-label">Administration</p>
  <ul className="menu-list">
    <li>
        <NavLink to={"/users"}>Users</NavLink>
    </li>

  </ul>
  <p className="menu-label">Settings</p>
  <ul className="menu-list">
    <button className='button is-white'>Logout</button>
  </ul>
</aside>
    </div>
  )
}

export default Sidebar
