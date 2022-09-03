import '../App.css';
import React from 'react'
import Header from './Header';
import { Routes, Route } from 'react-router-dom'

function App() {



  return (
    <div className='App'>
      <Header />
      {/* <Routes> */}
        <h1>hello</h1>
        <button>Explore trails</button>
      {/* </Routes> */}
    </div>
  );
}

export default App;
