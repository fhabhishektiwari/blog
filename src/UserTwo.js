import React from "react";
const UserTwo=(props)=>{
    return(
        <div>
            <h1>User component</h1>
            <button onClick={props.data}>call data function</button>
        </div>
    );
}

export default UserTwo; 