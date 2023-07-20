import {createBrowserRouter, Outlet} from "react-router-dom";
import {Navbar} from "../components/Navbar/Navbar";

const AppLayout = () => (
    <>
        <Navbar />
        <div>
            <div>

            </div>
            <Outlet />
        </div>


    </>
);


export const router = createBrowserRouter ([
    {
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <div>Hello word</div>
            },
                {
                    path: "/login",
                    element: <div>hello my name is</div>
                },

        ]
    }
]);