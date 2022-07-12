const UsersFive=(props)=>{
    return(
        <div style={{boxShadow:"0 0 10px #000",width:250,margin:'10px auto',padding:'8px 12px',borderRadius:'7px 0 7px 0'}}>
            <h4>User: {props.data.name}</h4>
            <p>Email: {props.data.email}</p>
            <p>Contact: {props.data.contact}</p>
            <button style={{padding:'8px 12px',backgroundColor:'#4183cc',borderRadius:'7px',border:'0',color:'#fff'}} onClick={()=>{
                alert("Hello Welcome "+props.data.name);
            }}>View {props.data.name} Profile</button>
        </div>
    );
}

export default UsersFive;