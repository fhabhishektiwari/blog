import React from "react";
import CommonContext from "./CommonContext";
const Header = () => {
    return (
        <CommonContext.Consumer>
        {
            ({color})=>(
                <div>
                    <h1 style={{backgroundColor:color}}>Header Page</h1>
                </div>
            )   
        }

        </CommonContext.Consumer>
    );
}

export default Header;