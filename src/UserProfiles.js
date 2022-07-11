import * as React from 'react';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfiles = () => {
  // const students = ["Nishant", "Ketan", "Yashwant", "sidharth"];
  const students = [
    {
      name:"Nishant",
      mobileno:9855221155,
      email:"nishantbhatnagar@gmail.com",
      source:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name:"Ketan",
      mobileno:9695221155,
      email:"ketan@gmail.com",
      source:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name:"Yashwant",
      mobileno:9894261155,
      email:"yashwant@gmail.com",
      source:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name:"Vidrohi",
      mobileno:9894261155,
      email:"yashwant@gmail.com",
      source:"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    

  ];


  // map: use for loop
  // students.map((item)=>{
  //   console.log(item);
  // })
  return (
    <>
    <h1 className='display-6 text-success'>User Profiles</h1>
    <div className='' style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        {
          students.map((data) => {
            return <div className="bg-light" style={{boxShadow:'0 0 5px #000',height:350,width:350,margin:'10px auto',borderRadius:'7px',textAlign:'center',padding:'15px'}}>
                    <img src={data.source} style={{width:150,height:150,borderRadius:'50%',pointerEvents:'none'}}/>
                    <p><b>Name: </b>{data.name}</p>
                    <p><b>Email: </b>{data.email}</p>
                    <p><b>Mobile Number: </b>{data.mobileno}</p>
                    <Button className="btn btn-primary btn-sm">View Profile</Button>
                  </div>
            
          })
        }
    </div>
    </>
    

  );
}
export default UserProfiles;
