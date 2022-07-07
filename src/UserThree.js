import React from "react"

class UserThree extends React.Component{
    constructor(){
        super();
        this.state={
            email:"nishant@gmail.com"
        }
    }
    render(){
        // console.log("render",this.props);
        console.log("render",this.state.email);
        return(
            <div>
                <h1>User Component</h1>
                <button onClick={()=>{
                    this.setState({email:"nima@gmail.com"})
                }}>update Email</button>
            </div>
        );
    }

}
export default UserThree;