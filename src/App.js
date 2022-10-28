import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404Error/NotFound'
import Charts from './pages/charts/Charts'
import Elements from './pages/elements/Elements'
import Forms from './pages/forms/Forms'
import DashBoard from './pages/home/DashBoard'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Tables from './pages/tables/Tables'
import Widgets from './pages/widgets/Widgets'

const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/signin' element={<Login />} />
                <Route exact path='/charts' element={<Charts />} />
                <Route exact path='/forms' element={<Forms />} />
                <Route exact path='/elements' element={<Elements />} />
                <Route exact path='/widgets' element={<Widgets />} />
                <Route exact path='/tables' element={<Tables />} />
                <Route exact path='/notfound' element={<NotFound/>} />
                <Route exact path='/' element={<DashBoard />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App