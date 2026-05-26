import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ServicePage from './pages/ServicePage'
import PricingPage from "./pages/PricingPage"


import Login from "./pages/admin/Login"
import SignUp from "./pages/admin/SignUP"
import Dashboard from "./pages/admin/Dasboard"

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/ServicePage' element={<ServicePage/>}/>
      <Route path='/Price' element={<PricingPage/>}/>

    <Route path="/admin/login" element={<Login />} />
<Route path="/admin/signup" element={<SignUp />} />
<Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>  

  )
}

export default App
