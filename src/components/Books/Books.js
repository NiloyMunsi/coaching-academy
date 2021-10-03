import React from 'react';
import './Books.css'

const Books = (props) => {
    const { name, author ,img,price} = props.book;
    return (
        
        <div className="book">
            <img className="cover-pic" src={img} alt="" />
            <h2>Course name: {name}</h2>
            <p>Author name: {author}</p>
            <p>Price: ${price}</p>
            
            </div>
    );
};

export default Books;