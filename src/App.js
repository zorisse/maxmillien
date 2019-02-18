import React, { Component } from 'react';
import './App.css';
//Import un component 
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SALUT </h1>
        <Person name='Nouri' age='28' />
        <Person name='Lara' age='25' > Props children  : </Person>
        <Person name='Delphine' age='29' />
      </div>
    );
  }
}

export default App;
