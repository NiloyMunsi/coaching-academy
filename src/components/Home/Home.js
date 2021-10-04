import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <About></About>
            <Services></Services>   
            <Contact></Contact>  
        </div>
    );
};

export default Home;