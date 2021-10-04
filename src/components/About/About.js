import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Person from '../Person/Person';
import './About.css'

const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('./about.JSON')
            .then(res => res.json())
        .then(data=>setAbout(data.slice(0,4)))
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
            <Link to="/allaboutus"><button className="btn">View All</button></Link>
        </div>
        );
};


export default About;