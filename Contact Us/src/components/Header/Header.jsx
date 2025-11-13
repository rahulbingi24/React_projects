import React from 'react'
import './header.css'

function Header() {
  return (
    <nav>
        <div className="logo">
          <img src="../public/images/logo.png" alt="" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
    </nav>
  )
}

export default Header