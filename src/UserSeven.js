import React,{useEffect,useRef} from "react";
const UserSeven=(props)=>{
    let lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count;
    })

    const prevVal=lastVal.current;
    return(
        <div>
            <h1>User Component</h1>
            <h3>Current Val:{props.count}</h3>
            <h3>Previous Val:{prevVal}</h3>
            <h3>Difference Val:{props.count-prevVal}</h3>
        </div>
    );
}

export default UserSeven;