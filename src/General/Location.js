import React, { useState, useEffect } from 'react';
import LocationM from '../Mobile/LocationM';
import LocationD from '../Desktop/LocationD';

function Location() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 900);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isDesktop ? <LocationD /> : <LocationM />}
        </div>
    );
}

export default Location;
