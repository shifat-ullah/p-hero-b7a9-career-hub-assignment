/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/component/Header'
import Home from './components/component/Home'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
