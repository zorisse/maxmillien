import React, { Component } from "react";
import "./App.css";
//Import un component
import Person from "./Person/Person";

class App extends Component {
  // State 
  state = {
    persons: [
      { name: "lapinouState ", age: 34 },
      { name: "MarleneState ", age: 14 },
      { name: "Kevin ", age: 3 }
    ],
    toggler: false
  };

// Méthode 

nameSwitchHandler = (event) => {
  // this.setSate() est une méthode.

  console.log("debut" + this.state.toggler);

  if (this.state.toggler) {

    this.setState({
      persons: [
        { name: "autre Sate ", age: 34 },
      { name: "autre state ", age: 14 },
      { name: "AutreState ", age: 3 }

      ],
      toggler: false
    });


  } else {
    this.setState({
      persons: [
        { name: "lapinouState ", age: 34 },
      { name: "MarleneState ", age: 14 },
      { name: "Kevin ", age: 3 }

      ],
      toggler: true
    });


  }
  console.log("Fin " + this.state.toggler);
}




  render() {
    return (
      <div className="App">
        <div id='L1'>
          <h1>SALUT </h1>
          <Person name="Nouri" age="28" />
          <Person name="Lara" age="25">
            {" "}
            Props children :{" "}
          </Person>
          <Person name="Delphine" age="29" />
        </div>
        <div id=''>
        <button onClick= {this.nameSwitchHandler}> Click Moi </button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
        </div>
      </div>
    );
  }
}

export default App;
