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
                <div>
                    <h3>One to One support</h3>
                <img src={support} alt="" />
            </div>
                <div>
                    <h3>Help each others</h3>
                <img src={support2} alt="" />
            </div>
                <div>
                    <h3>Make Team</h3>
                <img src={support3} alt="" />
            </div>
                <div>
                    <h3>24/7 hour services</h3>
                <img src={support4} alt="" />
            </div>
            </div>
        </div>
    
    );
};

export default Services;