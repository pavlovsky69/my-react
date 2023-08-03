import {createBrowserRouter} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";
import App from "../App";



const router=createBrowserRouter(
    [
        {
            path:AppRoutes.MAIN,
            element: <App/>
        }
    ]
)

export {router}