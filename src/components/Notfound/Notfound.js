import React from 'react';
import './Notfound.css';
import photo from '../../images/notfound.png'

const Notfound = () => {
    return (
        <div>
            <h1>Opps! 4O4 page not found !</h1>
            <img className="notfound" src={photo} alt="" />
        </div>
    );
};

export default Notfound;