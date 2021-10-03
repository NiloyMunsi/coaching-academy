import React from 'react';
import './Header.css'
import image from '../../images/background-2.jpg'
import Navbar from '../Navbar/Navbar';



const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="title">Niloy's Innovative Academy</h1>
            <div  className="header-container">
            <div className="head">
                <h4>Are you ready to learn?</h4>
                    <h2>Learn with fun !!!</h2>
                    <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits.</p>
            </div>
            <div className="hd">
                <img src={image} alt="" />
            </div>
            </div>
            
        </div>
    );
};

export default Header;