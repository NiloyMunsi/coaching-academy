import React from 'react';
import './Services.css';
import support from '../../images/support-1.png'
import support2 from '../../images/support-2.png'
import support3 from '../../images/support-3.jpg'
import support4 from '../../images/support-4.jpg'

const Services = () => {
    
    return (
        <div>
            <h1>Our Supports</h1>
            <div className="support">
            <img src={support} alt="" />
            <img src={support2} alt="" />
            <img src={support3} alt="" />
            <img src={support4} alt="" />
            </div>
        </div>
    
    );
};

export default Services;