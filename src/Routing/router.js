import {createBrowserRouter} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {MovieInfo} from "../components/MovieInfo/MovieInfo";
import {MoviesList} from "../components/MoviesList/MoviesList";

const router = createBrowserRouter ([
        {
            path:'',
            element:<Header/>,
            children:[
                {
                    path:'moviesList',
                    element:<MoviesList/>
                },
                {
                    path:'movieInfo',
                    element:<MovieInfo/>
                }
            ]

        }
    ]
)
export {router}