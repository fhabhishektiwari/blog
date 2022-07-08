// import logo from './logo.svg';
import './App.css';
import React from 'react';
import StudentTwo from './StudentTwo';


class  App extends React.Component{
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  render(){
    return(
      <div className='App'>
      {
        this.state.show ? <StudentTwo/>:<h1>Child component Remove</h1>

      }
        <button onClick={()=>{
          this.setState({show:!this.state.show})
        }}>Toggle Child Component</button>
      </div>
    );
  }
}
export default App;
