import { useNavigate } from "react-router-dom";
const NewForm=()=>{
    const navg=useNavigate();
    return(
        <div>
            <input type='text' placeholder="Enter Name" />
            <input type='text' placeholder="Password" />


            <button onClick={(e)=>{
                e.preventDefault();
                navg('/about');
            }}>Button</button>
        </div>

    );
}

export default NewForm;