import React from "react";


const Students=(props)=>{
    return (
        <div style={{backgroundColor:'#02a7a7',color:'#fff',margin:10,padding:10}}>
            <h1>Hello {props.name}</h1>
            <p>Email: {props.email}</p>
            <p>Address: {props.others.address}</p>
            <p>Mobile No.:{props.others.mobile}</p>
        </div>
    );
}

export default Students;

