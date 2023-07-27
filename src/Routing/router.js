import {createBrowserRouter} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {MoviesList} from "../components/MoviesList/MoviesList";

const router = createBrowserRouter ([
        {
            path:'',
            element:<Header/>,
            children:[
                {
                    path:'moviesList',
                    element:<MoviesList/>
                }
            ]

        }
    ]
)
export {router}