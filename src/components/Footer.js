import React from "react";
import '../App.css'
import CommonContext from "./CommonContext";
const Footer = () => {
    return (
        <CommonContext.Consumer>
        {
            ({color})=>(
                <div >
                    <h1 className="footer" style={{backgroundColor:color}}>Footer Page</h1>
                </div>
            )   
        }

        </CommonContext.Consumer>
    );
}

export default Footer;