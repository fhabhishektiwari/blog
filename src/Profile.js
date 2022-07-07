import { useState } from "react";

function Profile(){
    // const [loggedIn,setLoggedIn]=useState(true);
    // const [loggedIn,setLoggedIn]=useState(false);
    // const [loggedIn,setLoggedIn]=useState(1);
    // const [loggedIn,setLoggedIn]=useState(2);
    const loggedIn=1;

        // return(
        //     loggedIn?<h1>Welcome Nishant</h1>:<h1>Welcome Guest</h1>
        // );

        // 1,2,3
        return(
            <div>
                {loggedIn===1?<h1>Welcome to Nishant</h1>:loggedIn===2?<h1>Welcome Ketan</h1>:loggedIn===3?<h1>Welcome Devansh</h1>:<h1>Welcome to Guest</h1>}
            
            </div>
        );
}

export default Profile;