import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../compunents/Navbar'
import Footer from '../compunents/Footer'

const MainLayout = () => {
  return (
    <div className='bg-gradient-to-t from-blue-500 to-blue-900  min-h-screen'>
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

export default MainLayout
