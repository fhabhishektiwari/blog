// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Members from './Members';
import UserTwo from './UserTwo';

function App() {

  function getData(){
    alert("Hello App Component");
  }

  return (
    <div className='App'>     
      <UserTwo data={getData}/>

      <div>
        <Members data={getData}/>
      </div>
    </div>  
  );
}


export default App;

