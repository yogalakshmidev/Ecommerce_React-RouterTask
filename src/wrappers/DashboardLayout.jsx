import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Outlet } from 'react-router'
import './DashboardLayout.css';
const DashboardLayout = () => {
  return (
    <div className='dashboard'>
      <div id="sidebar">
      <Sidebar />  
      </div>
      
      <div id="main">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout