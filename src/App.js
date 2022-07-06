// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  // function getData(val){
  //   console.log(val.target.value);
  // }
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  return (
    <div className='App'>
      <h1>Get value from Input</h1>
      <input type={'text'} onChange={(val)=>{
        // console.log(val.target.value);
        setData(val.target.value);
        setPrint(false);
      }}/>
      <button onClick={()=>setPrint(true)}>Click</button>
      {
        print?
        <h1>{data}</h1>
        :null
      }
    </div>
  );
}


export default App;

