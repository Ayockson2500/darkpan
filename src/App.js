import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/404Error/NotFound'
import DashBoard from './pages/home/DashBoard'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/signin' element={<Login />} />
                <Route exact path='/notfound' element={<NotFound/>} />
                <Route exact path='/' element={<DashBoard />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App