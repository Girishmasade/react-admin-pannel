import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import AuthorisedBusiness from '../../pages/AuthorisedBusiness'

const Pageroute = () => {
  return (
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='authorised' element={<AuthorisedBusiness/>}/>
      </Routes>
  )
}

export default Pageroute
