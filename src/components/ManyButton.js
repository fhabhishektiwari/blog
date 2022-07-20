import React from "react";
import CommonContext from "./CommonContext";
const ManyButton = () => {
    return (
        <CommonContext.Consumer>
        {
            ({updateColor})=>(
                <div>
                    <button onClick={()=>updateColor('yellow')}>YellowColor</button>
                    <button onClick={()=>updateColor('aqua')}>AquaColor</button>
                    <button onClick={()=>updateColor('red')}>RedColor</button>
                </div>
            )   
        }

        </CommonContext.Consumer>
    );
}

export default ManyButton;