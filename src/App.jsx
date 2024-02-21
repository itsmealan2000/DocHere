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
//componetspages
import DoctorManage from './components/DoctorManage';



import {initialState,userEmail,reducer,useremailreducer} from '../src/reducer/UseReducer';

import { Routes,Route  } from 'react-router-dom';


export const UserContext = createContext();
const App = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const [useremail, dispatch1] = useReducer(useremailreducer, userEmail);
  return (
    <>
    <div className='w-100 nvbg p-2'>
      <UserContext.Provider value = {{state,useremail, dispatch,dispatch1}}>
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
        <Route path='/DoctorManage' element={<DoctorManage/>}/>

     </Routes>
     <Footer/>
     </UserContext.Provider>
    </div>
    </>
  )
}

export default App