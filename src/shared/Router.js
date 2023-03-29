import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Signup1 from '../pages/Signup/Signup1'
import Signup2 from '../pages/Signup/Signup2'
import Signup3 from '../pages/Signup/Signup3'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Categories from '../pages/Categories'
import Detail from '../pages/Detail'
import Profile from '../pages/Profile/Profile'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function Router() {
  const [loginStatus, setLoginStatus] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);

  useEffect(() => {
    setLoginStatus(isLogin);
  }, [isLogin]);

  return (
    <BrowserRouter>
      {loginStatus ? <Header /> : null}
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:categoryId" element={<Categories />} />
        <Route path="/movies/:categoryId/:streamId" element={<Detail />} />
        {!loginStatus ? (
          <>
            <Route path="/signup1" element={<Signup1 />} />
            <Route path="/signup2" element={<Signup2 />} />
            <Route path="/signup3" element={<Signup3 />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : null};
      </Routes>
    </BrowserRouter>
  )
}

export default Router
