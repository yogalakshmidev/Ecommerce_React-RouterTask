import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Shopsy</h1>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar