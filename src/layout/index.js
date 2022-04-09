import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="second">Second</Link>
      </nav>

      <Outlet/>
    </>
  )
}

export default Layout
