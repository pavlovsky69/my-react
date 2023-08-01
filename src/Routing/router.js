import {createBrowserRouter} from "react-router-dom";
import {ClassComponentPost} from "../components/ClassComponentPost/ClassComponentPost";
import {AppRoutes} from "./AppRoutes";
import {Navbar} from "../components/Navbar/Navbar";
import {ClassComponentComments} from "../components/ClassComponentComments/ClassComponentComments";
import {CarsComponent} from "../components/CarsComponent/CarsComponent";


const router =createBrowserRouter(
    [
        {
            path: AppRoutes.MAIN,
            element: <Navbar/>,
            children:[
                {
                    path: AppRoutes.POSTS,
                    element:<ClassComponentPost/>
                },
                {
                    path:AppRoutes.COMMENTS,
                    element: <ClassComponentComments/>
                },
                {
                    path: AppRoutes.CARS,
                    element: <CarsComponent/>
                }
            ]
        }

    ]
)
export {router}