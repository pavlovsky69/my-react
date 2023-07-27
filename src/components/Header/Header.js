import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import style from './Header.module.scss'

const Header = () => {
    return (
        <div>
            <div className={style.headerBar}>
                <NavLink className={style.button} to="/">MAIN PAGE</NavLink>
                <NavLink className={style.button} to="/moviesList">GET MOVIES</NavLink>
            </div>
            <Outlet/>

        </div>
    );
};

export {Header};