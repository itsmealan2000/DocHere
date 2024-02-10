import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Virtualconsult from './pages/virtualconsult';
import Docsearch from './pages/docsearch';
import Admin from './pages/admin';
import Pharmacy from './pages/pharmacy';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className='w-100 nvbg p-2'>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/virtualconsult' element={<Virtualconsult/>}/>
        <Route path='/docsearch' element={<Docsearch/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/pharmacy' element={<Pharmacy/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App