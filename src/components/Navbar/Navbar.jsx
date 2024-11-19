import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-img">
          <img src="public\assets\brand_logo.png" alt="logo" />
        </div>
        <div className="nav-content">
        <ul>
        <li href='/'>HOME</li>
        <li href='/'>ABOUT</li>
        <li href='/'>LOCATION</li>
        <li href='/'>CONTACT</li>
        </ul>
        </div>
        <button className="nav-btn">Login</button>
      </div>
      

    </>
  )
}

export default Navbar
