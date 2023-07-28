import React from 'react';
import style from './MovieListCard.module.scss'

const MoviesListCard = ({movie}) => {
    const {id, original_title, backdrop_path, genre_ids} = movie;
    const imagePoster = `https://image.tmdb.org/t/p/w500/${backdrop_path}`

    return (
        <div className={style.MAIN}>
            <div className={style.mainBlock}>
                <p>original_title:{original_title}</p>
                <p>id:{id}</p>
                <p>{genre_ids.map(genre=>genre)}</p>

                <img className={style.imagePoster} src={imagePoster} alt="image" width="400px"/>
            </div>

        </div>
    );
};
export {MoviesListCard};