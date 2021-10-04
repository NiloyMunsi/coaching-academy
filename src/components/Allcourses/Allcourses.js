import React from 'react';
import Books from '../Books/Books';
import Setallbooks from '../Setallbooks/Setallbooks';

const Allcourses = () => {
    const [allcourse] = Setallbooks([]);
    return (
        <div>
            {
                    allcourse.map(book => <Books
                        key={book.id}
                        book={book}>
                        
                        </Books>)
            }
        </div>
    );
};

export default Allcourses;