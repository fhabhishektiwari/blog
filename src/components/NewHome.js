import { Link } from "react-router-dom";
const NewHome=()=>{
    return(
        <div>
            <h1>Home Page</h1>
            <p>Hello, this is home page</p>
            <Link to='/about'>Go to About Page</Link>
        </div>
    );
}
export default NewHome;