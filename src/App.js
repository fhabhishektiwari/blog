import './App.css'
import React,{Fragment} from 'react';
import ChildComponent from './ChildComponent';
const App=()=>{
  return(
    // <>
    //   <h1>React Fragment</h1>
    // </>

    // <React.Fragment>
    //   <h1>React Fragment</h1>
    // </React.Fragment>

    // <Fragment>
    //   <h1>React Fragment</h1>
    // </Fragment>

    <div className='App'>
      <h1>Fragment component</h1>
      <table>
        <tbody>
          <tr>
            <ChildComponent/>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default App;