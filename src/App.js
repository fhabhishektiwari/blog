import './App.css'
import React from 'react';
import { BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';

const App=()=>{
  return(
    <div className='App'>
       <Router>
        <Link to='/home'>Home Page</Link>
        <Link to='/about'>About Page</Link>

        <Routes>
        <Route path='/home' element={<HomeOne/>}/>
        <Route path='/about' element={<AboutOne/>}/>
        </Routes>
        

       </Router>
    </div>
  );
}

const HomeOne=()=>{
  return(
    <div>
      <h1>Home Page</h1>
      <p>This is Home Page</p>
    </div>
  );
}

const AboutOne=()=>{
  return(
    <div>
      <h1>About Page</h1>
      <p>This is About Page</p>
    </div>
  );
}


export default App;