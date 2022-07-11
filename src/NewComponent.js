import React from "react";

class NewComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companyName:''
        };
    }

    changeText(e){
        this.setState({
            companyName:e.target.value
        });
    }
    render(){
        return(
            <div>
                <h2>Simple Event Example</h2>
                <label>Enter your company name</label>
                <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>
                <h4>You Entered:{this.state.companyName}</h4>
            </div>
        );
    }

}

export default NewComponent;