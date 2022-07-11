// import logo from './logo.svg';
import './App.css';
import './style.css';
import style from './custom.module.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


// or less ideally
import { Button } from 'react-bootstrap';

const  App=()=> {
  return(
    <div className='App'>
      <h1 className='primary'>Style type 1 in css</h1>
      <h1 style={{color:'red',backgroundColor:'black',marginTop:'10px'}}>Style type 2 in css</h1>
      <h1 className={style.success}>Style type 3(module css) in css</h1>
      <Button className='btn btn-danger btn-sm'>Click to update</Button>
    </div>
    
  );
}
export default App;
