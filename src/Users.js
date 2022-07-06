import React, { Component } from "react" 

/*
function Users(){
    return (
        <>
            <div>Hello Mrs. Abhishek Tiwari</div>
        </>
    );
}

export default Users;
*/

/*
const hstyle={color:'green'};
const Users = ()=>{
    return(
        <>
            <h1 style={hstyle}>Hello User welcome to react world!</h1>
        </>
    );
}

 
export default Users;
*/


// direct export function
// export function Users(){
//     return(
//         <>
//             <h1>You can write this way also.</h1>
//         </>
//     );
// }


// class component

class Users extends Component{
    render(){
        const headStyle={color:'green'};
        return(
            <>
                <h1>Class based component</h1>
                <h1 style={headStyle}>{89*9}</h1>
            </>    
        ); 
    }
}

export default Users;








