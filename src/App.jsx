import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import Navbar from './components/Navbar'
import DetailPage from './pages/DetailPage'
import Footer from './components/Footer'
import BuyHouse from './pages/BuyHouse'
import Dashboard from './components/Dashboard'
import Layout from './components/shared/Layout'
import Proudcts from './components/Proudcts'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Topbar from './components/shared/Topbar'
import ShowHeader from './components/ShowHeader'
import UpdateListing  from './pages/UpdateListing'
import Headerfile from './pages/Headerfile'
import EmailVerify from './pages/EmailVerify'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Headerfile />}>
        <Route index element={<Home />}/>
        <Route path='detail/:listingId' element={<DetailPage />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
      </Route>
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/activate-email' element={<EmailVerify />} ></Route>
      <Route element={<PrivateRoute/>} >
        <Route path='/profile' element={<Profile/>} />
        <Route path='/purchase/:id' element={<BuyHouse/>} />
        <Route path='/layout' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/layout/products' element={<Proudcts />} />
          <Route path='/layout/create-listing' element={<CreateListing/>} />
          <Route path='/layout/update-listing/:id' element={<UpdateListing />} />
          <Route path='/layout/orders' element={<Orders />} />
          <Route path='/layout/customers' element={<Customers />} />
        </Route>
      </Route>

    </Routes>

  </BrowserRouter>
  )
}

export default App;