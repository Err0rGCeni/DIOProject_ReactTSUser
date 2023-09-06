import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Conta from './pages/Conta';
import ContaInfo from './pages/ContaInfo';
import { AppContext } from './components/AppContext/AppContext';

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Home />} />
            <Route path='/infoconta' element={<ContaInfo />} />
        </Routes>
    )
}

export default MainRoutes;