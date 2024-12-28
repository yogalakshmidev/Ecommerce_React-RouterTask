import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router';
Link
export const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/dashboard/products'>Products</Link>
        <Link to='/dashboard/cart'>Cart</Link>
        
      </div>
    </div>
  )
}
