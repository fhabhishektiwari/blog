import React from "react";
class NewStudent extends React.Component{
    render(props){
        return(
            <div>
                <h1>Hello,{this.props.name}</h1>
                <p>Email: {this.props.email}</p>
            </div>


        );
    }
}
export default NewStudent;