import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './About.css'

const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('./about.JSON')
            .then(res => res.json())
        .then(data=>setAbout(data))
    },[])
    return (
        
        <div className="abouts-container">
        <h1>About Us</h1>
        <div className="person-container">
            
        {
                about.map(ab => <Person
                    key={ab.name}
                    ab={ab}>
                    
                    </Person>)
        }
        </div>
        </div>
        );
};


export default About;