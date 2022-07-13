import { Link } from "react-router-dom";

const About=()=>{
    return(
        <>
            <h1>About Page</h1>
            <p>This is a About page of our awesome App</p>
            <p>And here we are learning about Router</p>
            <Link to='/'>Go to Home Page</Link>
        </>
    );
}
export default About;