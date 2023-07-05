/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' p-2 text-xl mx-auto w-[80%] bg-slate-200'>
      <div className='items-center md:flex justify-between  '>
      <Link
          to='/'
          aria-label='Carrer Hub'
          title='Carrer Hub'
          className=' items-center text-3xl font-bold'
        >Carrer Hub
        </Link>
        <ul className='md:flex gap-5'>
          <li>
            <NavLink
              to='/Statistics'
              aria-label='Statistics'
              title='Statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Jobs'
              aria-label='Jobs'
              title='Jobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied Jobs
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/blog'
              aria-label='blog'
              title='blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div>
            <button className='btn-primary'>Star Applying</button>
        </div>
        </div>
      </div>
    
  )
}

export default Header