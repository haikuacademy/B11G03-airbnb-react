import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Houses from './components/Houses'
import House from './components/House'
import HouseEdit from './components/HouseEdit'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Houses />} />
                <Route path='/houses/:id' element={<House />} />
                <Route path='/houses/:id/edit' element={<HouseEdit />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router