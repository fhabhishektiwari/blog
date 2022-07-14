import { Link,useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();

    // const navToPage=()=>{
    //     // const x=false;
    //     // if(x){
    //     //     navigate('/about');
    //     // }else{
    //     //     navigate('/filter')
    //     // }
    // }

    const navToPage=(url)=>{
        navigate(url)
    }



    return(
        <>
            <h1>Home Page</h1>
            <p>This is a home page of our awesome App</p>
            <p>And here we are learning about Router</p>
            <Link to='/about'>Go to About Page</Link><br/>
            <button onClick={()=>navToPage('/about')}>Go to About Page</button><br/>
            <button onClick={()=>navToPage('/filter')}>Go to Filter Page</button>
        </>
    );
}
export default Home;