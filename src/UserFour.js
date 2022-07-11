// import logo from './logo.svg';
import './App.css';
import React, { useEffect} from 'react';


const UserFour = (props) => {
    useEffect(() => {
        console.log("Count is "+props.count);
    },[props.count,props.data]);
    return (
        <div className='App'>
            <h1>Count Props::{props.count}</h1>
            <h1>data Props::{props.data}</h1>
        </div>

    );
}
export default UserFour;
