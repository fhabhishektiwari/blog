import { useParams,useLocation } from "react-router-dom";
const User=()=>{
    const params=useParams();
    const {name}=params;
    const location=useLocation();
    console.log(location);
    return(
        <>
            <h1>This is {name} Page</h1>
        </>
    );
}

export default User;