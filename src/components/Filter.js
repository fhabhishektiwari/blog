import {useSearchParams} from 'react-router-dom';
const Filter=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    // console.log(searchParams.get('age'));
    // console.log(searchParams.get('city'));
    const name=searchParams.get('name');
    const age=searchParams.get('age');
    const city=searchParams.get('city');
    return(
        <div>
            <h1>Filter Page</h1>
            <h3>Name of Employee is {name}</h3>
            <p>Age is {age}</p>
            <p>& City is {city}</p>
            <input type="text" onChange={(e)=>setSearchParams({text:e.target.value,age:10})} placeholder='set text in query Params'/>
            <button onClick={(e)=>setSearchParams({age:40,name:'Nishant',city:'Luckhnow'})}>Set age in Query params</button>
        </div>
    );
}

export default Filter;