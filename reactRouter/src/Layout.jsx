import React from 'react'
import Header from './compon/header/Header'
import Footer from './compon/footer/Footer'
import { Outlet } from 'react-router-dom'



function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout