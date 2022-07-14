import { NavLink } from "react-router-dom";
import '../App.css'
const NewNavbar=()=>{
    return(
        <div className="main-nav">
            <ul className="navbar">
                {/* 2nd methods to make active  style={({isActive})=>{return {color:isActive?'#0b7753':'#000'} && {borderBottom:isActive?'2px solid #ff6f00':''}}}*/}
                <li><NavLink className='nav-bar-link' to='/' style={({isActive})=>{return {color:isActive?'#fff':''} && {borderBottom:isActive?'2px solid #ff6f00':''}}}>Home</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/about' style={({isActive})=>{return {color:isActive?'#0b7753':''} && {borderBottom:isActive?'2px solid #ff6f00':''}}}>About</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/contact' style={({isActive})=>{return {color:isActive?'#0b7753':'#000'} && {borderBottom:isActive?'2px solid #ff6f00':''}}}>Contact Us</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/filter' style={({isActive})=>{return {color:isActive?'#0b7753':'#000'} && {borderBottom:isActive?'2px solid #ff6f00':''}}}>Filter</NavLink></li>           
            </ul>
        </div>
    );

}

export default NewNavbar;