import React from 'react';


class  StudentTwo extends React.Component{

  componentWillUnmount(){
    alert("componentWillUnmount called");
  }  
  render(){
    return(
      <div className='App'>
        <h1>Student ComponentWillmount</h1>
      </div>
    );
  }
}
export default StudentTwo;
