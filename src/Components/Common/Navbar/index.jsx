import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const index = () => {
  return (
    <div className='bg-[#000] text-amber-50 flex gap-10 h-20 justify-center items-center text-4xl  ' >
      <NavLink to={"/"} className={({ isActive }) => {
        return isActive ? "text-purple-400" : "text-amber-50"
      }} >Home</NavLink>
      <NavLink to={"/about"} className={({ isActive }) => {
        return isActive ? "text-purple-400" : "text-amber-50"
      }}>About</NavLink>
      <NavLink to={"/contack"} className={({ isActive }) => {
        return isActive ? "text-purple-400" : "text-amber-50"
      }}>Contack</NavLink>
      <NavLink to={"/users"} className={({ isActive }) => {
        return isActive ? "text-purple-400" : "text-amber-50"
      }}>Users</NavLink>
    </div>
  )
}

export default index