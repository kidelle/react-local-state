import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'

class App extends Component {
render () {
  return (
    <div className="App">
      <main>
    <Header /> 
    <p>React is Fun!</p>
    </main> 
   
    </div>
  );
}

}

export default App;
