import React, {useEffect, useState} from "react";
import {apiKey} from "../../../constance/apiKey";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {AppRoutes} from "../../../Routing/AppRoutes";

const MoviesPage = () => {
    const [movies, setMovies] = useState ([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey
        }
    };

    useEffect (() => {
        fetch (`https://api.themoviedb.org/3/discover/movie`, options)
            .then (response => response.json ())
            .then (response => setMovies (response.results))
            .catch (err => console.error (err));
    }, [])

    return (
        <div>
            {movies.map (movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesPage};