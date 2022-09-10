import '../App.css';
import React from 'react'
import Header from './Header';
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing';

function App() {



  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/home' element={<Landing />}></Route>
        
        <Route exact path='/login' element={<Login />}></Route>

        <Route exact path='/signup' element={<Signup />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
