import './App.css'
import React from 'react';

const App=()=>{
  const [data,setData]=React.useState({name:"Ketan",age:24});
  return(
    <div className='App'>
    <h1>State Object with Hooks</h1>
    {/*1 methods: */}
    {/*<input type='text' placeholder='Enter name' value={data.name} onChange={(e)=>{setData({age:data.age,name:e.target.value})}}/>*/}
    {/*<input type='text' placeholder='Enter age' value={data.age} onChange={(e)=>{setData({name:data.name,age:e.target.value})}}/>*/}

    {/*2 methods*/}
    <input type='text' placeholder='Enter name' value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
    <input type='text' placeholder='Enter age' value={data.age} onChange={(e)=>{setData({...data,age:e.target.value})}}/>

    <h3>Name: {data.name}</h3>
    <h3>Age: {data.age}</h3>
    </div>
  );
}


export default App;