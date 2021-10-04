import React, { useEffect, useState } from 'react';

const Setallbooks = () => {
    const [allbooks, setAllbooks] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setAllbooks(data))
    }, []);
    return [allbooks]
       
    
};

export default Setallbooks;