import React from 'react';
import {AppRoutes} from "../../Routing/AppRoutes";
import {Link} from "react-router-dom";


const Navbar = () => {

    const buttons = [
        {
            label: 'Main',
            route: AppRoutes.MAIN
        },
        {
            label: 'Todos',
            route: AppRoutes.TODOS
        },
        {
            label: 'Albums',
            route: AppRoutes.ALBUMS
        },
        {
            label: 'Comments',
            route: AppRoutes.COMMENTS
        },
    ]
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'yellow',
            height: 40
        }}>
            {buttons.map ((btn, idx) => <Link className={'NavBarButton'} key={idx} to={btn.route}>
                {btn.label}
            </Link>)}
        </div>
    );
};
export {Navbar};