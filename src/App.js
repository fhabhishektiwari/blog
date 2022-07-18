import './App.css'
import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Nav from './Nav';
import HomeOne from './HomeOne';
import AboutOne from './AboutOne';
const App=()=>{
  return(
    <div className='App'>
      <Nav/>
        <Routes>
          <Route path='/' element={<HomeOne/>}/>
          <Route path='/about' element={<AboutOne/>}/>
        </Routes>
    </div>
  );
}


export default App;