import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {baseUrl, urls} from "../../constance/urls";
import {apiKey} from "../../constance/apiKey";
import style from "../MoviesList/MoviesListCard/MovieListCard.module.scss";

const MovieInfo = () => {
const params =useParams()
    const [data, setData] = useState ([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey
        },
        params: {
            api_key: '388cefb94016e91a085e0dfd274a8ea5'
        }
    };

    useEffect (() => {
        // fetch (baseUrl + urls.moviesList.base, options)
        fetch (`https://api.themoviedb.org/3/movie/${params.id}`, options)
            .then (response => response.json ())
            .then (response => setData(response))
            .catch (err => console.error (err));
    }, [])
    return (
        <div>
            <div>Budget: {data.budget}</div>
            <p>{data.title}</p>
            <p>{data.id}</p>
            <p>popularity: {data.popularity}</p>
            <p>release date: {data.release_date}</p>
            <p>vote average: {data.vote_average}</p>
        </div>
    );
};

export {MovieInfo};