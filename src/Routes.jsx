import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Houses from './components/Houses'
import House from './components/House'
import Login from './components/Login'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Houses />} />
        <Route path='/houses/:id' element={<House />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router