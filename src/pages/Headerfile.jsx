import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/shared/Topbar'
import Footer from '../components/Footer'

const Headerfile = () => {
  return (
    <div className='w-full'>
        <Topbar />
          <Outlet />
        <Footer />
    </div>
  )
}

export default Headerfile