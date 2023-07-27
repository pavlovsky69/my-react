import React from 'react';

const MoviesListCard = ({movie}) => {
    const {id, original_title, backdrop_path}=movie;
    const imagePoster=`https://image.tmdb.org/t/p/w500/${backdrop_path}`
    return (
        <div>
            <div>original_title:{original_title}</div>
            <div>id:{id}</div>
            <div>poster:{<img src={imagePoster}/>}</div>
        </div>
    );
};
export {MoviesListCard};