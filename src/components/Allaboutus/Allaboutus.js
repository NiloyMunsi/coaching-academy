import React from 'react';
import Setus from '../About/Setus/Setus';
import Person from '../Person/Person';

const Allaboutus = () => {
    const [us] = Setus([]);
    return (
        <div>
            {
                us.map(ab => <Person
                    key={ab.name}
                    ab={ab}>
                    
                    </Person>)
        }
        </div>
    );
};

export default Allaboutus;