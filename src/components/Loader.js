import React, { useState, useEffect } from 'react';

export const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Este estado controlará la visibilidad del loader.
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        //Se utiliza clearTimeout para cancelar el temporizador y evitar fugas de memoria.
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className={`lds-ripple loader ${isLoading ? '' : 'hide-loader'}`} id="loader">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};