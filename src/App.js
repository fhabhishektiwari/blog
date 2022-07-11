// import logo from './logo.svg';
import './App.css';
// import React,{useEffect,useState} from 'react';
import React,{useState} from 'react';

import UserFour from './UserFour';


const  App=()=> {
  const [count,setCount]=useState(10);
  const [data,setData]=useState(1);
  // useEffect(()=>{
  //   console.log("useeffect called");
  // },[data]);//useEffect will works only for data not for count

  // useEffect(()=>{
  //   alert("count is: "+count);
  // },[count]);
  return(
    <div className='App'>
      <button onClick={()=>{
        setData(data+1);
      }}>Update data</button>
      <button onClick={()=>{
        setCount(count+1);
      }}>Update Count</button>
      <UserFour count={count} data={data}/>

      {/* THIS ONE IS A VALID COMMENT */}
      {/*<h1>data::{data}</h1>*/}
      {/*<h1>Count::{count}</h1>*/}
    </div>
    
  );
}
export default App;
