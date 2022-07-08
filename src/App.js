// import logo from './logo.svg';
import './App.css';
import React from 'react';


class  App extends React.Component{
  constructor(){
    super()
    console.log("constructor");
    this.state={
      count:0
    }
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate",this.state.count);
    // return false;//by default
    if(this.state.count>5 && this.state.count<10){
      return true;
    }
  }

  render(){
    console.log("render");
    return(
      <div className='App'>
        <h1>Should Component Update: bydefault stop to render methods {this.state.count}</h1>
        <button onClick={()=>{
          this.setState({count:this.state.count+1});
        }}>Update name</button>
      </div>
    );
  }
}
export default App;
