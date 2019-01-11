import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import route from './route'

class App extends Component {
  render() {
    
      
    if (document.location.href === 'http://localhost:3000/#/') {
     return (<div className="App">
       
     {route}
     
    </div>)
    } else { 

    return (
      <div className="App">
       
       <Nav ></Nav>
       
       {route}
       
      </div>
    );
  }
}
}
export default App;
