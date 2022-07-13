import './App.css'
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
const App=()=>{
  return(
    <div className='App'>
    <BrowserRouter>
    {/*<Link to='/about'>About</Link><br/>
  <Link to='/'>Home</Link>*/}
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;