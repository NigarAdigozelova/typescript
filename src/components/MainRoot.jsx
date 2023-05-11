// import React from 'react'
import { Outlet } from 'react-router-dom'
// import Footer from './Footer/Footer'
// import Navbar from './Navbar/Navbar'

const MainRoot = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default MainRoot