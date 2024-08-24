import React from 'react'
import Nav from './Nav/Nav'
import { Outlet } from 'react-router-dom'
import Home from './Home/Home'
function Layou() {
  return (
    <>
        <Nav/>
        <Home />
    </>
  )
}

export default Layou
