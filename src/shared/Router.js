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
import Profile from '../pages/Profile'
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

// * ============================================================== *
// * ======= isProfileLogin && isLogin State Handling Set ========= * 
// * ============================================================== *

// function Router() {
// ------------ isProfileLogin Global State Handling ----------------
// const [profileLoginStatus, setProfileLoginStatus] = useState(false);
// const isProfileLogin = useSelector((state) => state.profileToken.isProfileLogin);

// Re-rendering
// useEffect(() => {
//   setProfileLoginStatus(isProfileLogin);
// }, [isProfileLogin]);
// ------------ isProfileLogin Global State Handling ----------------

// ------------ isLogin Global State Handling ----------------
// const [loginStatus, setLoginStatus] = useState(false);
// const isLogin = useSelector((state) => state.auth.isLogin);

// useEffect(() => {
//   setLoginStatus(isLogin);
// }, [isLogin]);
// ------------ isLogin Global State Handling ----------------

// * =============== Profile State Handling Set =================== * 


// return (
//   <BrowserRouter>
//     {loginStatus && profileLoginStatus ? <Header /> : null}
//     <Routes>
//       {loginStatus && profileLoginStatus ? (
//         <>
//           <Route path="/" element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/movies/:categoryId" element={<Categories />} />
//           <Route path="/movies/:categoryId/:streamId" element={<Detail />} />
//         </>
//       ) : null}
//       {!loginStatus ? (
//         <>
//           <Route path="/signup1" element={<Signup1 />} />
//           <Route path="/signup2" element={<Signup2 />} />
//           <Route path="/signup3" element={<Signup3 />} />
//           <Route path="/login" element={<Login />} />
//         </>
//       ) : null};
//       {loginStatus && !profileLoginStatus ? (
//         <>
//           <Route path="/profile" element={<Profile />} />
//         </>
//       ) : null}
//     </Routes>
//   </BrowserRouter>
// )
// }
// * ============================================================== *
// * ======= isProfileLogin && isLogin State Handling Set ========= * 
// * ============================================================== *

export default Router
