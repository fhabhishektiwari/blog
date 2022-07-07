// import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:"Nishant"
    }
  }
  render(){
    console.log("render")
    return(
      <div>
        <h1>Welcome {this.state.data}</h1>
      </div>
    );
  }
}

export default App;
