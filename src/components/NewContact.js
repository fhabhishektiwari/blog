import { NavLink, Outlet } from "react-router-dom";
import '../App.css';
const NewContact=()=>{
    return(
        <div>
            <h1>Contact us Page</h1>
            <h2>Here we have some other business</h2>
            <NavLink className='nav-link' to='company' style={({isActive})=>{return {color:isActive?'#fff':''} && {borderBottom:isActive?'2px solid #ff6f00':''}}}>Company</NavLink>
            <NavLink className='nav-link' to='channel' style={({isActive})=>{return {color:isActive?'#fff':''} && {borderBottom:isActive?'2px solid #ff6f00':''}}}>Channel</NavLink>
            <NavLink className='nav-link' to='other' style={({isActive})=>{return {color:isActive?'#fff':''} && {borderBottom:isActive?'2px solid #ff6f00':''}}}>Other</NavLink>
            <Outlet/>

        </div>
    );
}

export default NewContact;