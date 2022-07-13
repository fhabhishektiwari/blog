import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <div style={{backgroundColor:'#888',height:'50px',padding:'12px'}}>
            <ul style={{listStyle:'none',display:'flex',justifyContent:'space-around'}}>
                {/*<li><Link to='/'>Home</Link></li>*/}
                {/*<li><Link to='/about'>About</Link></li>*/}
                <a href="/about">About</a>
            </ul>
        </div>
    );
}

export default NavBar;