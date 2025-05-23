import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
  const [users, setUsers] = useState({})
  const { id } = useParams()
  const url = import.meta.env.VITE_BACKEND_URL + "/users/" + id
  useEffect(() => {
    axios(url).then(({ data }) => {
      setUsers(data)

    })
  }, [])
  return (
    <div>
      <h2 className='text-5xl border-2 border-[#ddd]'> Username : {users.username}</h2>
      <h2 className='text-5xl border-2 border-[#ddd]'>Name : {users.name}</h2>
      <h2 className='text-5xl border-2 border-[#ddd]'>Email : {users.email}</h2>

    </div>
  )
}

export default UserDetail