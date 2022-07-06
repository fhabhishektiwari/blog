// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './Users';
import Students from './Students';

// this is use when you direct export component
// import { Users } from './Users';

function App() {
  // useState=using for stored the data.
  const [data,setData]=useState(0);

  function updateData(){
    // window.confirm("Are you sure to updated data?");

    if(window.confirm("Are you sure to update data?")===true){
      setData(data+1);
    }

    
  }
  // console.log("-----------------------------");
  return (
    <div className='App'>
      <h1>Count {data}</h1>
      <button onClick={()=>alert("hi")}>Click me Second</button>
      <button onClick={updateData}>Update data</button>
      <Users/>
      <Students name={"Abhishek"} email={"abhishek.tiwari@firsthive.com"} others={{address:"U.P.",mobile:"555-555-5555"}}/>
      <Students name={"Nishant"} email={"nishant.bhatnagar@firsthive.com"} others={{address:"U.P.",mobile:"666-666-6666"}}/>
      <Students name={"Ketan"} email={"ketan.suryavansi@firsthive.com"} others={{address:"M.P.",mobile:"888-444-3333"}}/>
    </div>
  ); 
}



// Here you can create component in same page
// const hstyle={color:'green'};
// const Users = ()=>{
//   return(
//       <>
//           <h1 style={hstyle}>Hello User welcome to react world!</h1>
//       </>
//   );
// }



export default App;

