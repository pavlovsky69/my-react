import {createBrowserRouter, Outlet} from "react-router-dom";
import {Navbar} from "../components/Navbar/Navbar";
import {AppRoutes} from "./AppRoutes";
import {Todos} from "../components/Todos/Todos";
import {Albums} from "../components/Albums/Albums";
import {Comments} from "../components/Comments/Comments";
import {Post} from "../components/Posts/Post/Post";


const AppLayout = () => (
    <>
        <Navbar/>
        <Outlet/>
    </>
);


export const router = createBrowserRouter ([
    {
        element: <AppLayout/>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <h1 style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    Todos. Albums. Comments.</h1>
            },
                {
                    path: AppRoutes.TODOS,
                    element: <Todos/>
                },
            {
                    path: AppRoutes.ALBUMS,
                    element: <Albums/>
                },
            {
                    path: AppRoutes.COMMENTS,
                    element: <Comments/>,
                },
            {
                path: AppRoutes.POST,
                element: <Post/>,
            },
        ],
    }
]);
