import React from 'react';
import './Person.css'

const Person = (props) => {
    const { name, position ,img} = props.ab;
    return (
        
        <div className="person">
            <img className="profile-pic" src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Position: {position}</p>
            </div>
    );
};

export default Person;