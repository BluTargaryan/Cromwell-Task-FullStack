import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBeforeLanding from './components/NavBeforeLanding'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Registration from './pages/Registration'
import Landing from './pages/Landing'

function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/reg" element={<Registration />} />
      <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
