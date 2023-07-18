import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getToken, removeToken } from './scenes/account/authentication/helpers'
import { Navigate } from 'react-router-dom'
import AuthProvider from './scenes/account/authentication/AuthProvider'
import Navbar from './scenes/global/Navbar/Navbar'
import SideMenu from './scenes/global/sideMenu/SideMenu'
import Footer from './scenes/global/Footer/Footer'
import Home from './scenes/home/Home'
import Shop from './scenes/shop/Shop'
import Product from './scenes/product/Product'
import AboutUs from './scenes/aboutUs/AboutUs'
import Contact from './scenes/contact/Contact'
import Blog from './scenes/blog/Blog'
import Post from './scenes/post/Post'
import Login from './scenes/account/Login'
import Register from './scenes/account/Register'
import Profile from './scenes/account/Profile'
import Checkout from './scenes/checkout/Checkout'
import CheckoutSuccess from './scenes/SuccessCheck/CheckoutSuccess'
import NotFoundPage from './scenes/notfoundPage'

function App() {
  return (
    <div className='app'>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product' element={<Product />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/Post' element={<Post />} />
            <Route
              path='/account/login'
              element={
                getToken() ? <Navigate to='/account/profile' /> : <Login />
              }
            />
            <Route
              path='/account/register'
              element={
                getToken() ? <Navigate to='/account/profile' /> : <Register />
              }
            />
            <Route
              path='/account/profile'
              element={
                getToken() ? <Profile /> : <Navigate to='/account/login' />
              }
            />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/CheckoutSuc' element={<CheckoutSuccess />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <SideMenu></SideMenu>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
