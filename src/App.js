import React, { Component } from "react";
import "./App.css";
//Import un component
import Person from "./Person/Person";

class App extends Component {
  // State
  state = {
    persons: [
      { id: "erer", name: "lapinouState ", age: 34 },
      { id: "13", name: "MarleneState ", age: 14 },
      { id: "14", name: "Kevin ", age: 3 }
    ],
    toggler: false
  };

  // Méthode

  deleteHandler = id => {
    let persons = [...this.state.persons];
    //copy de l'array
    let personIndex = persons.findIndex(el => el.id === id);
    // recherche de l'index
    persons.splice(personIndex, 1);
    // troncature de l'index
    this.setState({
      persons: persons
    });
  };

  inputHandler = (event, id) => {
    let persons = [...this.state.persons];
    //copy de l'array
    let personIndex = persons.findIndex(el => el.id === id);
    // recherche de l'index
    persons[personIndex].name = event.target.value;
    // Changement de la value nom
    this.setState({
      persons: persons
    });
  };
  render() {
    let per = null;
    per = (
      <div>
        {this.state.persons.map(el => {
          return (
            <Person
              name={el.name}
              age={el.age}
              key={el.id}
              // delete={() => this.deleteHandler(el.id)}
              delete={this.deleteHandler.bind(this, el.id)} // methode bind this
              change={event => this.inputHandler(event, el.id)}
            />
          );
        })}
      </div>
    );

    return <div>{per}</div>;
  }
}

export default App;
