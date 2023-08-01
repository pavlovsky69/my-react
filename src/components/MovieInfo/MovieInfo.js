import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {baseUrl, urls} from "../../constance/urls";
import {apiKey} from "../../constance/apiKey";

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
        fetch (baseUrl + urls.moviesList.base, options)
            .then (response => response.json ())
            .then (response => setData(response))
            .catch (err => console.error (err));
    }, [])
    return (
        <div>
            {console.log(params.id)}
            AAA
            <Outlet/>
        </div>
    );
};

export {MovieInfo};