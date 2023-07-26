import React from 'react';
import {Outlet} from "react-router-dom";

const MoviesList = () => {
    return (
        <div>
            MoviesList
            <Outlet/>
        </div>
    );
};

export {MoviesList};