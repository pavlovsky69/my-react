import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {UserComponent} from "../UserComponent/UserComponent";

const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<UserComponent/>
        }
    ]
)

export {router}