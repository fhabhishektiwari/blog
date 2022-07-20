import React from "react";
import CommonContext from "./CommonContext";
class MainOne extends React.Component{
    render(){
        return(
            <CommonContext.Consumer>
                {
                    ({color})=>(
                        <h1 style={{backgroundColor:color}}>Hi this is main page</h1>
                    )
                }
            </CommonContext.Consumer>
        );
    }
}

export default MainOne;