import { NavLink } from "react-router-dom";
import '../App.css'
const NewNavbar=()=>{
    return(
        <div>
            <ul className="navbar">
                <li><NavLink className='nav-bar-link' to='/'>Home</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/about'>About</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/contact'>Contact Us</NavLink></li>           
            </ul>
        </div>
    );

}

export default NewNavbar;