import { useState, useEffect } from 'react';

function Triangle() {
    const [ visible, setVisible ] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(prev => !prev);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <svg 
            className={`triangle hover-cursor ${visible ? '' : 'invisible'}`}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100"
        >
            <polygon points="50,90 90,10 10,10" fill="white" />
        </svg>
    );
}

export default Triangle
