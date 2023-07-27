import React, {useEffect, useState} from 'react';
import {NavLink, Outlet, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import {apiKey} from "../../constance/apiKey";
import {AppRoutes} from "../../Routing/AppRoutes";


const MoviesList = () => {

    const [count, setCount]=useState(1)
    const minus=()=>{
        setCount(count-1)
        if (count-1===0){
            return setCount(1)
        }
    };
    const plus=()=>{
        setCount(count+1)
    };

    const navigate = useNavigate ()
    const [movies, setMovies] = useState ([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey
        }
    };

    useEffect (() => {
        fetch (`https://api.themoviedb.org/3/discover/movie?page=${count}`, options)
            .then (response => response.json ())
            .then (response => setMovies (response.results))
            .catch (err => console.error (err));
    }, [count])

    return (
        <div>
            {movies.map (movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            {/*<button onClick={()=>navigate(AppRoutes.MoviesPage)}>NEXT PAGE</button>*/}
            <button onClick={()=>minus(count)}>PREVIOUS PAGE</button>
            <button onClick={()=>plus(count)}>NEXT PAGE</button>
        </div>
    );
};

export {MoviesList};