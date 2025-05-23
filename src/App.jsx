import React from 'react'
import Home from "./Pages/Home"
import Users from './Pages/Users'
import About from "./Pages/About/"
import Contack from "./Pages/Contack/"
import NotFound from "./Pages/NotFound/"
import Navbar from "./Components/Common/Navbar"
import { Route, Routes } from 'react-router-dom'
import UserDetail from './Pages/UserDetail'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contack' element={<Contack />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetail />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>

    </div>
  )
}

export default App