import React from "react";


const Students=(props)=>{
    return (
        <div style={{backgroundColor:'red',margin:10}}>
            <h1>Hello {props.name}</h1>
            <p>Email: {props.email}</p>
            <p>Address: {props.others.address}</p>
        </div>
    );
}

export default Students;

