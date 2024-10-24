import React from 'react'
import {BrowseRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'

const Pageroute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default Pageroute
