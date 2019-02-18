import React, { Component } from "react";
import "./App.css";
//Import un component
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "lapinouState ", age: 34 },
      { name: "MarleneState ", age: 14 },
      { name: "Kevin ", age: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>SALUT </h1>
        <Person name="Nouri" age="28" />
        <Person name="Lara" age="25">
          {" "}
          Props children :{" "}
        </Person>
        <Person name="Delphine" age="29" />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
  }
}

export default App;
