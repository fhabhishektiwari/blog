import './App.css'
import UsersFive from './UsersFive';
const App=()=>{
  const users=[
    {name:'Nishant',email:'nishant@gmail.com',contact:"333"},
    {name:'Amit',email:'amit@gmail.com',contact:"111"},
    {name:'Aman',email:'aman@gmail.com',contact:"222"},
    {name:'Aniket',email:'aniket@gmail.com',contact:"333"},
    {name:'Rahul',email:'rahul@gmail.com',contact:"333"},
  ]
  return(
    <div className='App'>
      <h1>Reuse Component with list</h1>
      {
        users.map((dt,i)=>{
          return <UsersFive data={dt} key={i}/>
        })
      }
    </div>
  );
}

export default App;