import React from 'react';

const UserComponent = ({user}) => {
    const {id, username}=user;
    return (
        <div>
            <div>userId: {id}</div>
            <div>name:{username}</div>
        </div>
    );
};

export {UserComponent};