import './App.css'
import React,{useState} from 'react';

const App=()=>{
  const [count,setCount]=useState(1);
  return(
    <div className='App'>
    <h1>Previous state in functional component</h1>
    <h3>Count: {count}</h3>
    <button onClick={()=>{
      // let rand=Math.floor(Math.random()*10);
      // setCount((prevVal)=>{
      //   // console.log(prevVal);
      //   if(prevVal<5){
      //     alert("value is less than 5");
      //   }
      //   return rand;
      // });

      for(let i=0;i<5;i++){
        // setCount(count+1);
        setCount((prevVal)=>{
          return prevVal+1;
        })
      }
    }}>update</button>

    </div>
  );
}


export default App;