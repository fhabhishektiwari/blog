// import logo from './logo.svg';
import './App.css';
import React from 'react';


class  App extends React.Component{
  constructor(){
    super()
    this.state={
      name:"Amit"
    }
  }

  componentDidMount(){
    console.log("component did mount");
  }

  render(){
    console.log("render");
    return(
      <div className='App'>
        <h1>Component did mount {this.state.name}</h1>
        <button onClick={()=>{
          this.setState({name:"Ankur"});
        }}>Update data</button>
      </div>
    );
  }
}
export default App;
