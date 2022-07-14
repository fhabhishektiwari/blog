import { Link,useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();

    return(
        <>
            <h1>Home Page</h1>
            <p>This is a home page of our awesome App</p>
            <p>And here we are learning about Router</p>
            <Link to='/about'>Go to About Page</Link><br/>
            <button onClick={()=>navigate('/about')}>Go to About Page</button><br/>
            <button onClick={()=>navigate('/filter')}>Go to Filter Page</button>
        </>
    );
}
export default Home;