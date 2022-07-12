import './App.css'
import React from 'react';

import UserData from './UserData';
const App=()=>{

  function parentAlert(data){
    // alert(data.name);
    console.log(data)
  }

  // let data="Nishant";
  return(
    <div className='App'>
      <h1>Lifting state up(Send data child to parent component)</h1>
      {/*<UserData data={data}/>*/}
      <UserData alert={parentAlert}/>
    </div>

  );
}

export default App;