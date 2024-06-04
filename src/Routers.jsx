import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import Home from './pages/Home';
import Login from './pages/login/Login';


const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;