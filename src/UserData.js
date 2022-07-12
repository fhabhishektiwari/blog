const UserData = (props) => {
    const data={name:"Nishant",email:"nishant@gmail.com"};
    return ( 
        <div>
            {/*<h2>Username: {props.data}</h2>*/}
            <h2>Username: {data.name}</h2>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
     );
}
 
export default UserData;