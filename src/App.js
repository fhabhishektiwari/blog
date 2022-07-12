// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const users = [
    { name: 'Nishant', email: 'nishant@gmail.com', mobileno: '111' },
    { name: 'Ketan', email: 'ketan@gmail.com', mobileno: '111' },
    { name: 'Gaurav', email: 'gaurav@gmail.com', mobileno: '111' },
    { name: 'Yashwant', email: 'yashwant@gmail.com', mobileno: '101' },
    { name: 'Ankur', email: 'ankur@gmail.com', mobileno: '111' }

  ]
  return (
    <div className='App'>
      <Table border={1} striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map((data,key)=>
          data.mobileno==='101'?
          <tr key={key}>
            <td>{key+1}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.mobileno}</td>
          </tr>:null
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
