// import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";
const UserTwo=()=>{
    const params=useParams();
    const {id,name,title}=params;
    return(
        <>
            <h3>User Id: {id}</h3>
            <h2>User Name: {name}</h2>
            <p>Title: {title}</p>
        </>
    );
}
export default  UserTwo;