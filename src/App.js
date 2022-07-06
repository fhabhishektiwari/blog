// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const [fname,setFName]=useState();
  const [lname,setLName]=useState();
  const [tnc,setTnc]=useState(false);
  const [interest,setInterest]=useState("");
  

  function getFormData(e){
    e.preventDefault();
    console.log(fname,lname,tnc,interest);
  }
  return (
    <div className='App' style={{boxShadow:"0px 0px 10px #000",width:350,height:350,margin:"0 auto",borderRadius:"7px",background:"linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)",color:"#fff",padding:"10"}}>
      <h1>Handle form in react</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter first name' onChange={(e)=>{
          setFName(e.target.value);
         
        }}/><br/>
        <input type="text" placeholder='Enter last name' onChange={(e)=>{
          setLName(e.target.value);
          
        }}/><br/>
        <select onChange={(val)=>{
          setInterest(val.target.value);
          
        }}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br/>
        <input type='checkbox' onChange={(e)=>{
          setTnc(e.target.checked);
        }} /><label>Accept term & Condition</label><br/>
        <button type='submit'>Submit</button>
        <button type='reset'>Clear</button>
      </form>
      
    </div>  
  );
}


export default App;

