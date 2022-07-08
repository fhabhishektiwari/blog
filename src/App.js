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

  componentDidUpdate(preProps,preState,snapShot){
    console.log("component did update",preState.count,this.state.count);
    // if(preState.count===this.state.count){
    //   alert("already data same");
    //   
    // }

    if(this.state.count<10){
      this.setState({count:this.state.count+1})
    }

  }

  render(){
    console.log("render");
    return(
      <div className='App'>
        <h1>Component did update:it is use when state and props change{this.state.count}</h1>
        <button onClick={()=>{
          this.setState({count:1});
        }}>Update name</button>
      </div>
    );
  }
}
export default App;
