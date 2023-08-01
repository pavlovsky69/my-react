import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {apiKey} from "../../constance/apiKey";

const MovieInfo = () => {
const params =useParams()
    const [data, setData] = useState ({})

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
            <p>{data.title}</p>
            <p>{data.id}</p>
            {console.log(data.genres)}
            {/*<div>Budget: {data.budget}</div>*/}
            {/*<p>popularity: {data.popularity}</p>*/}
            {/*<p>release date: {data.release_date}</p>*/}
            {/*<p>vote average: {data.vote_average}</p>*/}
        </div>
    );
};

export {MovieInfo};