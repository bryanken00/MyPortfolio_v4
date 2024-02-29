import React from 'react'
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'

import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout