import React from 'react';

const person = (props) => {

    // le JSX commence toujours par un DIV
    return (
            <div>
                <h4>{props.name}</h4>  
                <p> My name is {props.name} and my age is {props.age} years </p>
                <p>{props.children}</p>
                
            </div>
        )
}
export default person;


