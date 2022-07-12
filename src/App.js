import './App.css'
import React,{useState,useMemo} from 'react';
const App=()=>{
  const [count,setCount]=useState(0);
  const [item,SetItem]=useState(10);
  
  // function multiCount(){
  //   console.log("multicount called")
  //   return count*2;
  // }

  const multiCountMemo=useMemo(function multiCount(){
    console.log("MultiCount");
    return count*5;
  },[count])

  return(
      <div className='App'>
        <h1>useMemo Hook in react</h1>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>SetItem(item*10)}>Update Item</button>
        <h3>Count: {count}</h3>
        <h3>Item: {item}</h3>
        <h3>{multiCountMemo}</h3>
      </div>
  
    );
}

export default App;