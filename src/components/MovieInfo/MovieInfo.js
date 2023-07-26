import React from 'react';
import {Outlet} from "react-router-dom";

const MovieInfo = () => {
    return (
        <div>
            MovieInfo
            <Outlet/>
        </div>
    );
};

export {MovieInfo};