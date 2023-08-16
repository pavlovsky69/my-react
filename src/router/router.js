import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts";
import {CharactersPage, EpisodesPage} from "../pages";
import {UserComponent} from "../UserComponent/UserComponent";
import {NewComponent} from "../NewComponent/NewComponent.tsx";



const router = createBrowserRouter (
    [
        {
            path: '',
            element: <UserComponent/>
            // children: [
            //     {
            //         index: true,
            //         element: <Navigate to={'episodes'}/>
            //     },
            //     {
            //         path: 'episodes',
            //         element: <EpisodesPage/>
            //     },
            //     {
            //         path: 'characters',
            //         element: <CharactersPage/>
            //     }
            // ]
        },
        {
            path: 'NewComponent',
            element: <NewComponent/>
        }
    ]
)

export {router}