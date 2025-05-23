import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])
  const url = import.meta.env.VITE_BACKEND_URL
  useEffect(() => {
    axios(url + "/users").then(({ data }) => {
      setUsers(data)
    })
  }, [])
  return (
    <div>{
      users.map(({ id, username }) => {
        return <h2 key={id} className='text-4xl border-2 border-[#ddd] m-10 p-10
          relative'>
          <Link to={"/users/" + id} className=' absolute inset-0' target='_blank'></Link>
          {username}
        </h2>
      })
    }</div>
  )
}

export default Users