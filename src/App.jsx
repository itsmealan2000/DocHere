import React, { createContext, useReducer } from 'react'
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
import Profile from './pages/Profile';
import Logout from './pages/logout';

import {initialState,reducer} from '../src/reducer/UseReducer';

import { Routes,Route,Link  } from 'react-router-dom';


export const UserContext = createContext();
const App = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <div className='w-100 nvbg p-2'>
      <UserContext.Provider value = {{state, dispatch}}>
     <Navbar/>
     <Routes>
  
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/virtualconsult' element={<Virtualconsult/>}/>
        <Route path='/docsearch' element={<Docsearch/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/pharmacy' element={<Pharmacy/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/logout' element={<Logout/>}/>

     </Routes>
     <Footer/>
     </UserContext.Provider>
    </div>
    </>
  )
}

export default App