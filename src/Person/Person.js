import React from "react";

const person = props => {
  return (
    <div>
      <h1>personne </h1>
      <input type="text" onChange={props.change} value={props.name} />
      <p>
        Le prénom est {props.name} et son age est {props.age} an .
      </p>
      <button onClick={props.delete}>Delete ME </button>
    </div>
  );
};
export default person;
