import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewHome from './components/NewHome';
import About from './components/About';
import User from './components/User';
import NewNavbar from './components/NewNavbar';
import Filter from './components/Filter';
import NewContact from './components/NewContact';
import Company from './components/Company';
import Channel from './components/Channel';
import Other from './components/Other';
import Login from './components/Login';
import Protected from './components/Protected';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <NewNavbar />
        <Routes>
          <Route path='/' element={<Protected Component={NewHome} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<Protected Component={About} />} />

          {/*Nested routing in react js*/}
          <Route path='/contact/' element={<Protected Component={NewContact} />}>
            <Route path='company' element={<Company />} />
            <Route path='channel' element={<Channel />} />
            <Route path='other' element={<Other />} />
          </Route>
          <Route path='/filter' element={<Protected Component={Filter} />} />
          <Route path='/user/:name' element={<User />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;