import React, { useEffect, useState } from 'react';

const Setus = () => {
    const [ab, setAb] = useState([]);
    useEffect(() => {
        fetch('./about.JSON')
            .then(res => res.json())
        .then(data=>setAb(data))
    },[])
    return [ab]
};

export default Setus;