import './App.css'
import React,{Component} from 'react';
class UserSix extends Component{
  render(){
    console.warn("User component re-rendering")
    return(
      <div className='App'>
        <h1>User Component {this.props.count}</h1>
      </div>
    );
  }  
}

export default UserSix;