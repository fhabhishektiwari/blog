import React from "react";
const Members=(props)=>{
    return(
        <div>
            <h1>Member component</h1>
            <button onClick={props.data}>call data function</button>
        </div>
    );
}

export default Members; 