import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MobNav from '../Components/MobNav/MobNav'

const LayOutOne = () => {
  return (
    <>
    <Navbar/>
    <MobNav/>
    <Outlet/>
    </>
  )
}

export default LayOutOne