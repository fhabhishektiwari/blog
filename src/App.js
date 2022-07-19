import './App.css'
import React from 'react';
import {Link,Route, Routes} from 'react-router-dom';
import UserTwo from './components/UserTwo';

const App=()=>{
  const usersList=[{id:1,name:"Nishant",email:"nishant@gmail.com",title:'Java Developer'},
    {id:2,name:"Ketan",email:"ketan@gmail.com",title:'Python Developer'},
    {id:3,name:"Divyanshu",email:"Divyanshu@gmail.com",title:'Python Developer'},
    {id:4,name:"Yashwanth",email:"Yashwanth@gmail.com",title:'Python Developer'},
    {id:5,name:"Ankur",email:"Ankur@gmail.com",title:'Trainee Engineer'},
    {id:13,name:"Siddharth",email:"siddharth@gmail.com",title:'Data Science'}
  ]
  return(
    <div className='App'>
      <nav>
        <ul>
          <li>
          {
            usersList.map((usr,keys)=>
            <Link to={"/user/"+usr.id+"/"+usr.name+"/"+usr.title} key={keys} style={{marginLeft:25}} >{usr.name}</Link>
            )
          }  
          </li>
          
        </ul>
      </nav>
      
      <Routes>
          <Route path='/user/:id/:name/:title' element={<UserTwo/>}/>
      </Routes>


      
      
    </div>
  );
}


export default App;