import { Link } from "react-router-dom";

const About=()=>{
    return(
        <>
            <h1>About Page</h1>
            <p>This is a About page of our awesome App</p>
            <p>And here we are learning about Router</p>
            <Link to='/'>Go to Home Page</Link>

            <ul>
                <li>
                    <Link to='/user/Nishant' style={{marginLeft:20}}>Nishant</Link>
                    <Link to='/user/Ketan' style={{marginLeft:20}}>Ketan</Link>
                    <Link to='/user/Abhishek' style={{marginLeft:20}}>Abhishek</Link>
                </li>
            </ul>    
        </>
    );
}
export default About;