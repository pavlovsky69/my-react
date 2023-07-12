import React from 'react';

const UserAddress = ({address}) => {
    const {street, suite, city}=address;
    return (
        <div>
            <div>Address. Street: {street}, suite: {suite}, city: {city}</div>
        </div>
    );
};

export {UserAddress};