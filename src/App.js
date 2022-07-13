import './App.css'
import React, { useState } from 'react';
const App=()=>{
  return(
    <div className='App'>
      <h1>HOC(Hight order Component)</h1>
      <HocRed cmp={Counter}/>
      <HocGreen cmp={Counter}/>
      <HocBlue cmp={Counter}/>
    </div>
  );
}

const HocRed=(props)=>{
  return(
    <h1 style={{backgroundColor:'red',width:200,height:200,margin:25}}>Red<props.cmp/></h1>
    //{/*<h1 style={{backgroundColor:'green',width:250,height:250}}><props.cmp/></h1> */}
  );
}

const HocGreen=(props)=>{
  return(
      <h1 style={{backgroundColor:'green',width:200,height:200,margin:25}}>Green<props.cmp/></h1>
    );
}
const HocBlue=(props)=>{
  return(
    <>
      <h1 style={{backgroundColor:'blue',width:200,height:200,margin:25}}>Blue<props.cmp/></h1>
    </>
  );
}


const Counter=()=>{
  const [count,setCount]=useState(0)
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
  );
}

export default App;