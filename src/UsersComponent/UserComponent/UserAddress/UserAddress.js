import React from 'react';

const UserAddress = ({user}) => {
    const {address:{street, suite, city}}=user
    return (
        <div>
            <div>Address. Street: {street}, suite: {suite}, city: {city}</div>
        </div>
    );
};

export {UserAddress};