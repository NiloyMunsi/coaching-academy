import React from 'react';
import './Contact.css';
import photo from '../../images/contact.jpg'

const Contact = () => {
    return (
        <div>
            <h1>Connect With Us</h1>

            <div className="cover">
                <img src={photo} alt="" />
            </div>
        </div>
    );
};

export default Contact;