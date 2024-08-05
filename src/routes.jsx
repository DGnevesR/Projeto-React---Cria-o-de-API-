import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Adidas from './pages/Adidas'
import Nike from './pages/Nike'
import Vans from './pages/Vans'
import PageBase from './pages/PaginaBase/index.jsx'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/Adidas" element={ <Adidas /> }></Route>
                    <Route path="/Nike" element={ <Nike /> }></Route>
                    <Route path="/Vans" element={ <Vans /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
