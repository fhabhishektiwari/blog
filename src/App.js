import './App.css'
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
const App=()=>{
  return(
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;