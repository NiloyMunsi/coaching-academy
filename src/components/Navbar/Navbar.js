import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className="navbar">
            <Link className="nav" to="/home">Home</Link>
            <Link className="nav" to="/allaboutus">About Us</Link>
            <Link className="nav" to="/allcourses">Courses</Link>
            <Link className="nav" to="/services">Services</Link>
            <Link className="nav" to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;