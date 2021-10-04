import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Books from '../Books/Books';
import './Courses.css'


const Courses = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setBooks(data.slice(0,3)))
    }, []);
    return (
        <div className="books-container">
            <h1>Our Courses</h1>
            <div className="book-container">
                
            {
                    books.map(book => <Books
                        key={book.id}
                        book={book}>
                        
                        </Books>)
            }
            </div>
            <Link to="/allcourses"><button className="btn">View All</button></Link>
            </div>
            );
};


export default Courses;