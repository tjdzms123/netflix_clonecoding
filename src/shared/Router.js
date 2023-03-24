import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Categories from '../pages/Categories'
import Detail from '../pages/Detail'

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:categoryId" element={<Categories />} />
        <Route path="/movies/:categoryId/:streamId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
