import React from 'react';
import CommonContext from './components/CommonContext';
import Footer from './components/Footer';
import Header from './components/Header';
import MainOne from './components/MainOne';
import ManyButton from './components/ManyButton';


class App extends React.Component{
  constructor(){
    super();
    this.updateColor=(color)=>{
      this.setState({
        color:color,
      })
    }
    this.state={
      color:null,
      updateColor:this.updateColor
    }
    
  }
  render(){
    return(
      <CommonContext.Provider value={this.state}>
        <Header/>
        <CommonContext.Consumer>
        {
            ({color})=>(
                <div>
                    <h1 style={{backgroundColor:color}}>Context API</h1>
                </div>
            )   
        }

        </CommonContext.Consumer>
        <MainOne/>
        <ManyButton/>
        <Footer/>
      </CommonContext.Provider>
    );
  }
  
}

export default App;