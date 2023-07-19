import React from 'react';

const Car = ({car}) => {
    const {id, brand, price, year}=car;
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button>update</button>
            <button>delete</button>
        </div>
    );
};

export {Car};