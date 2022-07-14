import './App.css'
import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
// import Page404 from './components/Page404';
import Contact from './components/Contact';
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
        <Route path='/contact' element={<Contact/>}/>
        {/*<Route path='/*' element={<Page404/>}/>*/}
        <Route path='/*' element={<Navigate to ='/' />}/>{/* Here we we can redirect any page*/}

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;