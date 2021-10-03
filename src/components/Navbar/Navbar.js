import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className="navbar">
            <Link className="nav" to="/home">Home</Link>
            <Link className="nav" to="/about">About</Link>
            <Link className="nav" to="/contact">Contact</Link>
            <Link className="nav" to="/courses">Courses</Link>
            </div>
        </div>
    );
};

export default Navbar;