import React from 'react';

const GenreListCard = ({genre}) => {
    const {id, name}=genre;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export {GenreListCard};