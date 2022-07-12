import './App.css'
import React,{PureComponent,Component} from 'react';
import UserSix from './UserSix';
class App extends PureComponent{
  constructor(){
    super();
    this.state={
      count:1
    }
  }
  render(){
    console.warn("Check rerendering");
    return(
      <div className='App'>
      {/*<h1>Pure Component in react {this.state.count}</h1>*/}
      <UserSix count={this.state.count}/>
        <button onClick={()=>this.setState({count:this.state.count})}>Update Count</button>
      </div>
  
    );
  }
  
}

export default App;