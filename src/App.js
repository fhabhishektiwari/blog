// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const users = [
    {
      name: 'Nishant', email: 'nishant@gmail.com', address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
        { Hn: "43", city: "Delhi", country: "India" },
        { Hn: "63", city: "Noida", country: "India" }
      ]
    },
    {
      name: 'Ketan', email: 'ketan@gmail.com', address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
        { Hn: "43", city: "Delhi", country: "India" },
        { Hn: "63", city: "Noida", country: "India" }
      ]
    },
    {
      name: 'Gaurav', email: 'gaurav@gmail.com', address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
        { Hn: "43", city: "Delhi", country: "India" },
        { Hn: "63", city: "Noida", country: "India" }
      ]
    },
    {
      name: 'Yashwant', email: 'yashwant@gmail.com', address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
        { Hn: "43", city: "Delhi", country: "India" },
        { Hn: "63", city: "Noida", country: "India" }
      ]
    },
    {
      name: 'Ankur', email: 'ankur@gmail.com', address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
        { Hn: "43", city: "Delhi", country: "India" },
        { Hn: "63", city: "Noida", country: "India" }
      ]
    }

  ]
  return (
    <div className='App'>
      <h1>List with nested Array</h1>

      <Table variant='dark' striped hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((data, key) => {
              return <tr key={key}>
                <td>{key + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <Table variant='dark' striped hover borderless>
                    <tbody>  
                  {
                      data.address.map((ad, key) => {
                        return <tr key={key} style={{ color: '#fff' }}>
                          <td>{ad.Hn}</td>
                          <td>{ad.city}</td>
                          <td>{ad.country}</td>
                        </tr>
                      })

                    }
                    </tbody>
                  </Table>
                </td>
              </tr>
            })
          }

        </tbody>

      </Table>

    </div>
  );
}

export default App;
