import React from "react";
class NewStudent extends React.Component{
    render(props){
        return(
            <div>Hello,{this.props.name}</div>

        );
    }
}
export default NewStudent;