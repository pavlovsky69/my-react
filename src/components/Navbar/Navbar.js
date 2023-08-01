import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";
import style from './Navbar.module.css'

const Navbar = () => {

    return (
        <div>
            <div className={style.MAIN}>
                <div className={style.links}>
                    <NavLink className={style.link} to={AppRoutes.MAIN}>MAIN</NavLink>
                    <NavLink className={style.link} to={AppRoutes.POSTS}>ALL POSTS</NavLink>
                    <NavLink className={style.link} to={AppRoutes.COMMENTS}>ALL COMMENTS</NavLink>
                    <NavLink className={style.link} to={AppRoutes.CARS}>ALL CARS</NavLink>
                </div>
            </div>
            <Outlet/>
        </div>

    );
};

export {Navbar};